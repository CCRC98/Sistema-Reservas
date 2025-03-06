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
exports.RoomController = void 0;
const serviceContainer_1 = require("../../shared/serviceContainer");
class RoomController {
    getRooms(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rooms = yield serviceContainer_1.ServiceContainer.room.getRooms.getAll();
                return res.status(200).json(rooms);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getRoomById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const room = yield serviceContainer_1.ServiceContainer.room.getRoomById.getById(parseInt(req.params.id, 10));
                return res.status(200).json(room);
            }
            catch (error) {
                if (error) {
                    return res.status(200).json(error);
                }
                next(error);
            }
        });
    }
    createRoom(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, number, type, price } = req.body;
                yield serviceContainer_1.ServiceContainer.room.createRoom.create(id, number, type, price);
                return res.status(201).json({ message: "Habitacion creada" });
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateRoom(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, number, type, price } = req.body;
                yield serviceContainer_1.ServiceContainer.room.updateRoom.update(id, number, type, price);
                return res.status(204).json({ message: "Actualizacion exitosa." });
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteRoom(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield serviceContainer_1.ServiceContainer.room.deleteRoom.delete(parseInt(req.params.id, 10));
                return res.status(204).json({ message: "Habitacion eliminada." });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.RoomController = RoomController;
