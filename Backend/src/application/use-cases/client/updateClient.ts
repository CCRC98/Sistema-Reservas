import { Client } from "../../../domain/entities/client/client";
import { clientEmail } from "../../../domain/entities/client/valueObjects/clientEmail";
import { clientId } from "../../../domain/entities/client/valueObjects/clientId";
import { clientName } from "../../../domain/entities/client/valueObjects/clientName";
import { clientPhone } from "../../../domain/entities/client/valueObjects/clientPhone";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class UpdateClient {
  constructor(private repository: IClientRepository) {}

  async update(
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

    return this.repository.updateClient(client);
  }
}
