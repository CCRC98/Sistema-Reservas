import { Client } from "../entities/client";
import { clientId } from "../valueObjects/client/clientId";

export interface IClientRepository {
  createClient(client: Client): Promise<void>;
  getClients(): Promise<Client[]>;
  getClientById(id: clientId): Promise<Client | null>;
  updateClient(client: Client): Promise<void>;
  deleteClient(id: clientId): Promise<void>;
}
