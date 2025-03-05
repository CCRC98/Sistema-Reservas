"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const clientRoutes_1 = require("./infrastructure/routes/clientRoutes");
const config_1 = require("./infrastructure/persistence/typeorm/config");
const app = express();
app.use(express.json());
app.use(clientRoutes_1.clientRouter);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        console.error(err.stack);
        res.status(500).send(err.message);
    }
    console.error(err);
    res.status(500).send("Something broke");
});
config_1.AppDataSource.initialize()
    .then(() => {
    console.log("Base de datos conectada satisfactoriamente.");
    app.listen(3000, () => {
        console.log("Servidor funcionando en el puerto 3000.");
    });
})
    .catch((error) => console.error("Conexion a base de datos fallida.", error));
