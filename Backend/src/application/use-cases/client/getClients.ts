import { Client } from "../../../domain/entities/client/client";
import { ClientRepository } from "../../../domain/repositories/IClientRepository";

export class GetClients {
  constructor(private repository: ClientRepository) {}

  async getClients(): Promise<Client[]> {
    return this.repository.getClients();
  }
}
