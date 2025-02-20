import { Client } from "../../../domain/entities/client";
import { clientEmail } from "../../../domain/valueObjects/client/clientEmail";
import { clientId } from "../../../domain/valueObjects/client/clientId";
import { clientName } from "../../../domain/valueObjects/client/clientName";
import { clientPhone } from "../../../domain/valueObjects/client/clientPhone";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class CreateClient {
  constructor(private repository: IClientRepository) {}

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
