"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContainer = void 0;
const clientRepository_1 = require("../infrastructure/persistence/typeorm/repositories/clientRepository");
const createClient_1 = require("../application/use-cases/client/createClient");
const deleteClient_1 = require("../application/use-cases/client/deleteClient");
const getClientById_1 = require("../application/use-cases/client/getClientById");
const getClients_1 = require("../application/use-cases/client/getClients");
const updateClient_1 = require("../application/use-cases/client/updateClient");
const ClientRepository = new clientRepository_1.ClientRepositoryTypeOrm();
exports.ServiceContainer = {
    client: {
        getClients: new getClients_1.GetClients(ClientRepository),
        getClientById: new getClientById_1.GetClientById(ClientRepository),
        createClient: new createClient_1.CreateClient(ClientRepository),
        updateClient: new updateClient_1.UpdateClient(ClientRepository),
        deleteClient: new deleteClient_1.DeleteClient(ClientRepository),
    },
};
