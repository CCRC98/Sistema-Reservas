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
exports.CreateClient = void 0;
const client_1 = require("../../../domain/entities/client/client");
const clientEmail_1 = require("../../../domain/entities/client/valueObjects/clientEmail");
const clientId_1 = require("../../../domain/entities/client/valueObjects/clientId");
const clientName_1 = require("../../../domain/entities/client/valueObjects/clientName");
const clientPhone_1 = require("../../../domain/entities/client/valueObjects/clientPhone");
class CreateClient {
    constructor(repository) {
        this.repository = repository;
    }
    create(id, name, email, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new client_1.Client(new clientId_1.clientId(id), new clientName_1.clientName(name), new clientEmail_1.clientEmail(email), new clientPhone_1.clientPhone(phone));
            return this.repository.createClient(client);
        });
    }
}
exports.CreateClient = CreateClient;
