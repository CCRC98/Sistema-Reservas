import { Pool } from "pg";
import { IClientRepository } from "../../domain/repositories/IClientRepository";
import { Client } from "../../domain/entities/client";
import { clientId } from "../../domain/valueObjects/client/clientId";
import { clientName } from "../../domain/valueObjects/client/clientName";
import { clientEmail } from "../../domain/valueObjects/client/clientEmail";
import { clientPhone } from "../../domain/valueObjects/client/clientPhone";

type ClientPostgre = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export class PostgreSQLRepository implements IClientRepository {
  Connection: Pool;

  constructor(databaseUrl: string) {
    this.Connection = new Pool({
      connectionString: databaseUrl,
    });
  }

  async createClient(client: Client): Promise<void> {
    const query = {
      text: "INSERT INTO Client (id, name, email, phone) VALUES ($1, $2, $3, $4)",
      values: [
        client.id.value,
        client.name.value,
        client.email.value,
        client.phone.value,
      ],
    };

    await this.Connection.query(query);
  }

  async getClients(): Promise<Client[]> {
    const query = {
      text: "Select * FROM Client",
    };

    const result = await this.Connection.query<ClientPostgre>(query);
    return result.rows.map(
      (row) =>
        new Client(
          new clientId(row.id),
          new clientName(row.name),
          new clientEmail(row.email),
          new clientPhone(row.phone)
        )
    );
  }

  async getClientById(id: clientId): Promise<Client | null> {
    const query = {
      text: "SELECT * FROM Client WHERE id = $1",
      values: [id.value],
    };

    const result = await this.Connection.query<ClientPostgre>(query);

    if (result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0];

    return new Client(
      new clientId(row.id),
      new clientName(row.name),
      new clientEmail(row.email),
      new clientPhone(row.phone)
    );
  }

  async updateClient(client: Client): Promise<void> {
    const query = {
      text: "UPDATE Client SET name = $1, email = $2, phone = $3 where id = $4",
      values: [
        client.name.value,
        client.email.value,
        client.phone.value,
        client.id.value,
      ],
    };

    await this.Connection.query(query);
  }

  async deleteClient(id: clientId): Promise<void> {
    const query = {
      text: "DELETE FROM Client WHERE id = $1",
      values: [id.value],
    };

    await this.Connection.query(query);
  }
}
