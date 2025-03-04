import { Client } from "../../../domain/entities/client/client";
import { clientId } from "../../../domain/entities/client/valueObjects/clientId";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class GetClientById {
  constructor(private repository: IClientRepository) {}

  async getById(id: string): Promise<Client> {
    const client = await this.repository.getClientById(new clientId(id));

    if (!client) {
      throw new Error("Usuario no encotrado.");
    }

    return client;
  }
}
