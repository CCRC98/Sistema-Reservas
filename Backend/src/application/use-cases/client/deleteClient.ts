import { clientId } from "../../../domain/entities/client/clientId";
import { ClientRepository } from "../../../domain/repositories/IClientRepository";

export class DeleteClient {
  constructor(private repository: ClientRepository) {}

  async deleteClient(id: string): Promise<void> {
    await this.repository.deleteClient(new clientId(id));
  }
}
