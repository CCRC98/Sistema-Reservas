"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var clientRoutes_1 = require("./infrastructure/routes/clientRoutes");
var app = express();
app.use(express.json());
app.use(clientRoutes_1.clientRouter);
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        console.error(err.stack);
        res.status(500).send(err.message);
    }
    console.error(err);
    res.status(500).send("Something broke");
});
app.listen(3000, function () {
    console.log("Servidor corriendo en 3000");
});
