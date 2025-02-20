import { clientId } from "../../../domain/valueObjects/client/clientId";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class DeleteClient {
  constructor(private repository: IClientRepository) {}

  async deleteClient(id: string): Promise<void> {
    await this.repository.deleteClient(new clientId(id));
  }
}
