import { clientId } from "../../../domain/entities/client/valueObjects/clientId";
import { IClientRepository } from "../../../domain/repositories/IClientRepository";

export class DeleteClient {
  constructor(private repository: IClientRepository) {}

  async delete(id: string): Promise<void> {
    await this.repository.deleteClient(new clientId(id));
  }
}
