import { Client } from "../../../domain/entities/client/client";
import { clientId } from "../../../domain/entities/client/valueObjects/clientId";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class InMemmoryRepository implements IClientRepository {
  private client: Client[] = [];

  existClient(id: clientId): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async getClients(): Promise<Client[]> {
    return this.client;
  }

  async getClientById(id: clientId): Promise<Client | null> {
    return this.client.find((client) => client.id.value === id.value) || null;
  }

  async createClient(client: Client): Promise<void> {
    this.client.push(client);
  }

  async updateClient(client: Client): Promise<void> {
    const index = this.client.findIndex((u) => u.id.value == client.id.value);
    this.client[index] = client;
  }

  async deleteClient(id: clientId): Promise<void> {
    this.client = this.client.filter((client) => client.id.value !== id.value);
  }
}
