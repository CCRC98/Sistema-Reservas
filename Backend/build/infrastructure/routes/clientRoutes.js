"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRouter = void 0;
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const controller = new clientController_1.ClientController();
const clientRouter = (0, express_1.Router)();
exports.clientRouter = clientRouter;
clientRouter.get("/client/", controller.getClients);
clientRouter.get("/client/:id", controller.getClientById);
clientRouter.post("/client/", controller.createClient);
clientRouter.put("/client/", controller.updateClient);
clientRouter.delete("/client/:id", controller.deleteClient);
