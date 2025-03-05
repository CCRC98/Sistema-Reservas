import { ClientRepositoryTypeOrm } from "../infrastructure/persistence/typeorm/repositories/clientRepository";
import { CreateClient } from "../application/use-cases/client/createClient";
import { DeleteClient } from "../application/use-cases/client/deleteClient";
import { GetClientById } from "../application/use-cases/client/getClientById";
import { GetClients } from "../application/use-cases/client/getClients";
import { UpdateClient } from "../application/use-cases/client/updateClient";
import { PostgreSQLRepository } from "../infrastructure/persistence/repositories/PostgreSQLRepository";
import { InMemmoryRepository } from "../infrastructure/persistence/repositories/inMemmoryRepository";

const ClientRepository = new ClientRepositoryTypeOrm();

export const ServiceContainer = {
  client: {
    getClients: new GetClients(ClientRepository),
    getClientById: new GetClientById(ClientRepository),
    createClient: new CreateClient(ClientRepository),
    updateClient: new UpdateClient(ClientRepository),
    deleteClient: new DeleteClient(ClientRepository),
  },
};
