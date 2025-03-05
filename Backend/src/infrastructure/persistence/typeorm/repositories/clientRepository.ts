import { ClientTypeOrm } from "../entities/Client";
import { Client } from "../../../../domain/entities/client/client";
import { clientId } from "../../../../domain/entities/client/valueObjects/clientId";
import { IClientRepository } from "../../../../domain/repositories/IClientRepository";
import { Repository } from "typeorm";
import { AppDataSource } from "../config";
import { clientName } from "../../../../domain/entities/client/valueObjects/clientName";
import { clientEmail } from "../../../../domain/entities/client/valueObjects/clientEmail";
import { clientPhone } from "../../../../domain/entities/client/valueObjects/clientPhone";

export class ClientRepositoryTypeOrm implements IClientRepository {
  private readonly repository: Repository<ClientTypeOrm>;

  constructor() {
    this.repository = AppDataSource.getRepository(ClientTypeOrm);
  }

  async getClients(): Promise<Client[]> {
    const clients = await this.repository.find();
    return clients.map(
      (client) =>
        new Client(
          new clientId(client.id),
          new clientName(client.name),
          new clientEmail(client.email),
          new clientPhone(client.phone)
        )
    );
  }

  async getClientById(id: clientId): Promise<Client | null> {
    const client = await this.repository.findOne({ where: { id: id.value } });
    return client
      ? new Client(
          new clientId(client.id),
          new clientName(client.name),
          new clientEmail(client.email),
          new clientPhone(client.phone)
        )
      : null;
  }

  async createClient(client: Client): Promise<void> {
    const newClient = this.repository.create({
      id: client.id.value,
      name: client.name.value,
      email: client.email.value,
      phone: client.phone.value,
    });

    await this.repository.save(newClient);
  }

  async updateClient(client: Client): Promise<void> {
    await this.repository.update(client.id.value, {
      name: client.name.value,
      email: client.email.value,
      phone: client.phone.value,
    });
  }

  async deleteClient(id: clientId): Promise<void> {
    await this.repository.delete(id.value);
  }
}
