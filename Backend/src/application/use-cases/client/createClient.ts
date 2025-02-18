import { Client } from "../../../domain/entities/client/client";
import { clientEmail } from "../../../domain/entities/client/clientEmail";
import { clientId } from "../../../domain/entities/client/clientId";
import { clientName } from "../../../domain/entities/client/clientName";
import { clientPhone } from "../../../domain/entities/client/clientPhone";
import { ClientRepository } from "../../../domain/repositories/IClientRepository";

export class CreateClient {
  constructor(private repository: ClientRepository) {}

  async createClient(
    id: string,
    name: string,
    email: string,
    phone: string
  ): Promise<void> {
    const client = new Client(
      new clientId(id),
      new clientName(name),
      new clientEmail(email),
      new clientPhone(phone)
    );

    return this.repository.createClient(client);
  }
}
