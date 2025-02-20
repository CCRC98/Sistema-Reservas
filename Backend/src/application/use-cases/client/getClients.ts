import { Client } from "../../../domain/entities/client";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class GetClients {
  constructor(private repository: IClientRepository) {}

  async getClients(): Promise<Client[]> {
    return this.repository.getClients();
  }
}
