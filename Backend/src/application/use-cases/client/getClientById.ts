import { Client } from "../../../domain/entities/client";
import { clientId } from "../../../domain/valueObjects/client/clientId";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class GetClientById {
  constructor(private repository: IClientRepository) {}

  async getClientById(id: string): Promise<Client> {
    const client = await this.repository.getClientById(new clientId(id));

    if (!client) {
      throw new Error("Usuario no encotrado.");
    }

    return client;
  }
}
