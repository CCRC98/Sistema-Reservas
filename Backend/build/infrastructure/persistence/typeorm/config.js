"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pg12345",
    database: "Sistema-Reservas",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});
