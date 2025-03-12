import { Client } from "../entities/client/client";
import { clientId } from "../entities/client/valueObjects/clientId";

export interface IClientRepository {
  existClient(id: clientId): Promise<boolean>;
  getClients(): Promise<Client[]>;
  getClientById(id: clientId): Promise<Client | null>;
  createClient(client: Client): Promise<void>;
  updateClient(client: Client): Promise<void>;
  deleteClient(id: clientId): Promise<void>;
}
