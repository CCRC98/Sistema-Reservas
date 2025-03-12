import { Pool } from "pg";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";
import { Client } from "../../../domain/entities/client/client";
import { clientId } from "../../../domain/entities/client/valueObjects/clientId";
import { clientName } from "../../../domain/entities/client/valueObjects/clientName";
import { clientEmail } from "../../../domain/entities/client/valueObjects/clientEmail";
import { clientPhone } from "../../../domain/entities/client/valueObjects/clientPhone";

type ClientPostgre = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export class PostgreSQLRepository implements IClientRepository {
  Connection: Pool;

  constructor() {
    this.Connection = new Pool({
      user: "postgres",
      host: "localhost",
      password: "pg12345",
      database: "Sistema-Reservas",
      port: 5432,
    });
  }

  existClient(id: clientId): Promise<boolean> {
    throw new Error("Method not implemented.");
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
