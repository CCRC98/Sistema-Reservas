import { Client } from "../entities/client/client";
import { clientId } from "../entities/client/clientId";

export interface ClientRepository {
  createClient(client: Client): Promise<void>;
  getClients(): Promise<Client[]>;
  getClientById(id: clientId): Promise<Client | null>;
  updateClient(client: Client): Promise<void>;
  deleteClient(id: clientId): Promise<void>;
}
