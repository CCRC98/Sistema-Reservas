import { Client } from "../../../domain/entities/client/client";
import { clientId } from "../../../domain/entities/client/clientId";
import { ClientRepository } from "../../../domain/repositories/IClientRepository";

export class GetClientById {
  constructor(private repository: ClientRepository) {}

  async getClientById(id: string): Promise<Client> {
    const client = await this.repository.getClientById(new clientId(id));

    if (!client) {
      throw new Error("Usuario no encotrado.");
    }

    return client;
  }
}
