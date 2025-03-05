"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepositoryTypeOrm = void 0;
const Client_1 = require("../entities/Client");
const client_1 = require("../../../../domain/entities/client/client");
const clientId_1 = require("../../../../domain/entities/client/valueObjects/clientId");
const config_1 = require("../config");
const clientName_1 = require("../../../../domain/entities/client/valueObjects/clientName");
const clientEmail_1 = require("../../../../domain/entities/client/valueObjects/clientEmail");
const clientPhone_1 = require("../../../../domain/entities/client/valueObjects/clientPhone");
class ClientRepositoryTypeOrm {
    constructor() {
        this.repository = config_1.AppDataSource.getRepository(Client_1.ClientTypeOrm);
    }
    getClients() {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield this.repository.find();
            return clients.map((client) => new client_1.Client(new clientId_1.clientId(client.id), new clientName_1.clientName(client.name), new clientEmail_1.clientEmail(client.email), new clientPhone_1.clientPhone(client.phone)));
        });
    }
    getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.repository.findOne({ where: { id: id.value } });
            return client
                ? new client_1.Client(new clientId_1.clientId(client.id), new clientName_1.clientName(client.name), new clientEmail_1.clientEmail(client.email), new clientPhone_1.clientPhone(client.phone))
                : null;
        });
    }
    createClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const newClient = this.repository.create({
                id: client.id.value,
                name: client.name.value,
                email: client.email.value,
                phone: client.phone.value,
            });
            yield this.repository.save(newClient);
        });
    }
    updateClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(client.id.value, {
                name: client.name.value,
                email: client.email.value,
                phone: client.phone.value,
            });
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id.value);
        });
    }
}
exports.ClientRepositoryTypeOrm = ClientRepositoryTypeOrm;
