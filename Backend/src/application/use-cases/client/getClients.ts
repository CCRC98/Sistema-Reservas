import { Client } from "../../../domain/entities/client/client";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class GetClients {
  constructor(private repository: IClientRepository) {}

  async getAll(): Promise<Client[]> {
    return this.repository.getClients();
  }
}
