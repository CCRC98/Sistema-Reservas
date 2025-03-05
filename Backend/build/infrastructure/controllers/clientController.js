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
exports.ClientController = void 0;
const serviceContainer_1 = require("../../shared/serviceContainer");
class ClientController {
    getClients(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield serviceContainer_1.ServiceContainer.client.getClients.getAll();
                return res.json(client).status(200);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getClientById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield serviceContainer_1.ServiceContainer.client.getClientById.getById(req.params.id);
                return res.json(client).status(200);
            }
            catch (error) {
                if (error) {
                    return res.json(error).status(200);
                }
                next(error);
            }
        });
    }
    createClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, email, phone } = req.body;
                yield serviceContainer_1.ServiceContainer.client.createClient.create(id, name, email, phone);
                return res.status(201).send();
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, email, phone } = req.body;
                yield serviceContainer_1.ServiceContainer.client.updateClient.update(id, name, email, phone);
                return res.status(204).send();
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield serviceContainer_1.ServiceContainer.client.deleteClient.delete(req.params.id);
                return res.status(204).send();
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ClientController = ClientController;
