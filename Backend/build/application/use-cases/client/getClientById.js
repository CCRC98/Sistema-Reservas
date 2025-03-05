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
exports.GetClientById = void 0;
const clientId_1 = require("../../../domain/entities/client/valueObjects/clientId");
class GetClientById {
    constructor(repository) {
        this.repository = repository;
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.repository.getClientById(new clientId_1.clientId(id));
            if (!client) {
                throw new Error("Usuario no encotrado.");
            }
            return client;
        });
    }
}
exports.GetClientById = GetClientById;
