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
exports.PostgreSQLRepository = void 0;
const pg_1 = require("pg");
const client_1 = require("../../../domain/entities/client/client");
const clientId_1 = require("../../../domain/entities/client/valueObjects/clientId");
const clientName_1 = require("../../../domain/entities/client/valueObjects/clientName");
const clientEmail_1 = require("../../../domain/entities/client/valueObjects/clientEmail");
const clientPhone_1 = require("../../../domain/entities/client/valueObjects/clientPhone");
class PostgreSQLRepository {
    constructor() {
        this.Connection = new pg_1.Pool({
            user: "postgres",
            host: "localhost",
            password: "pg12345",
            database: "Sistema-Reservas",
            port: 5432,
        });
    }
    getClients() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "Select * FROM Client",
            };
            const result = yield this.Connection.query(query);
            return result.rows.map((row) => new client_1.Client(new clientId_1.clientId(row.id), new clientName_1.clientName(row.name), new clientEmail_1.clientEmail(row.email), new clientPhone_1.clientPhone(row.phone)));
        });
    }
    getClientById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "SELECT * FROM Client WHERE id = $1",
                values: [id.value],
            };
            const result = yield this.Connection.query(query);
            if (result.rows.length === 0) {
                return null;
            }
            const row = result.rows[0];
            return new client_1.Client(new clientId_1.clientId(row.id), new clientName_1.clientName(row.name), new clientEmail_1.clientEmail(row.email), new clientPhone_1.clientPhone(row.phone));
        });
    }
    createClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "INSERT INTO Client (id, name, email, phone) VALUES ($1, $2, $3, $4)",
                values: [
                    client.id.value,
                    client.name.value,
                    client.email.value,
                    client.phone.value,
                ],
            };
            yield this.Connection.query(query);
        });
    }
    updateClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "UPDATE Client SET name = $1, email = $2, phone = $3 where id = $4",
                values: [
                    client.name.value,
                    client.email.value,
                    client.phone.value,
                    client.id.value,
                ],
            };
            yield this.Connection.query(query);
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "DELETE FROM Client WHERE id = $1",
                values: [id.value],
            };
            yield this.Connection.query(query);
        });
    }
}
exports.PostgreSQLRepository = PostgreSQLRepository;
