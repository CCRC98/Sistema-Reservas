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
exports.InMemmoryRepository = void 0;
class InMemmoryRepository {
    constructor() {
        this.client = [];
    }
    getClients() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client;
        });
    }
    getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.find((client) => client.id.value === id.value) || null;
        });
    }
    createClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.push(client);
        });
    }
    updateClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.client.findIndex((u) => u.id.value == client.id.value);
            this.client[index] = client;
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.client = this.client.filter((client) => client.id.value !== id.value);
        });
    }
}
exports.InMemmoryRepository = InMemmoryRepository;
