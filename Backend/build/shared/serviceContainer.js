"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContainer = void 0;
var createClient_1 = require("../application/use-cases/client/createClient");
var deleteClient_1 = require("../application/use-cases/client/deleteClient");
var getClientById_1 = require("../application/use-cases/client/getClientById");
var getClients_1 = require("../application/use-cases/client/getClients");
var updateClient_1 = require("../application/use-cases/client/updateClient");
var inMemmoryRepository_1 = require("../infrastructure/persistence/repositories/inMemmoryRepository");
var ClientRepository = new inMemmoryRepository_1.InMemmoryRepository();
exports.ServiceContainer = {
    client: {
        getClients: new getClients_1.GetClients(ClientRepository),
        getClientById: new getClientById_1.GetClientById(ClientRepository),
        createClient: new createClient_1.CreateClient(ClientRepository),
        updateClient: new updateClient_1.UpdateClient(ClientRepository),
        deleteClient: new deleteClient_1.DeleteClient(ClientRepository),
    },
};
