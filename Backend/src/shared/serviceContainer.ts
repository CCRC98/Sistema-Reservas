import { CreateClient } from "../application/use-cases/client/createClient";
import { DeleteClient } from "../application/use-cases/client/deleteClient";
import { GetClientById } from "../application/use-cases/client/getClientById";
import { GetClients } from "../application/use-cases/client/getClients";
import { UpdateClient } from "../application/use-cases/client/updateClient";
import { PostgreSQLRepository } from "../infrastructure/repositories/clientPostgreSQLRepository";

const ClientRepository = new PostgreSQLRepository("url");

export const ServiceContainer = {
  user: {
    getClients: new GetClients(ClientRepository),
    getClientById: new GetClientById(ClientRepository),
    createClient: new CreateClient(ClientRepository),
    updateClient: new UpdateClient(ClientRepository),
    deleteClient: new DeleteClient(ClientRepository),
  },
};
