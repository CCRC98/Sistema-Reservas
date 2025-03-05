"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Client_1 = require("./entities/Client");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pg12345",
    database: "Sistema-Reservas",
    synchronize: true,
    logging: false,
    entities: [Client_1.ClientTypeOrm],
    subscribers: [],
    migrations: [],
});
