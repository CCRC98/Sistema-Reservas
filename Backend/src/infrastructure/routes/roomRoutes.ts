import { Router } from "express";
import { RoomController } from "../controllers/roomController";

const controller = new RoomController();

const roomRouter = Router();

roomRouter.get("/room/", controller.getRooms);
roomRouter.get("/room/:id", controller.getRoomById);
roomRouter.post("/room/", controller.createRoom);
roomRouter.put("/room/", controller.updateRoom);
roomRouter.delete("/room/:id", controller.deleteRoom);

export { roomRouter };
