import { Router } from "express";
import { ClientController } from "../controllers/clientController";

const controller = new ClientController();

const clientRouter = Router();

clientRouter.get("/client/", controller.getClients);
clientRouter.get("/client/:id", controller.getClientById);
clientRouter.post("/client/", controller.createClient);
clientRouter.put("/client/", controller.updateClient);
clientRouter.delete("/client/", controller.deleteClient);

export { clientRouter };
