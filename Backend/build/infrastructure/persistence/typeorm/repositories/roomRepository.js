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
exports.RoomRepositoryTypeOrm = void 0;
const room_1 = require("../../../../domain/entities/room/room");
const roomId_1 = require("../../../../domain/entities/room/valueObjects/roomId");
const config_1 = require("../config");
const Room_1 = require("../entities/Room");
const roomNumber_1 = require("../../../../domain/entities/room/valueObjects/roomNumber");
const roomType_1 = require("../../../../domain/entities/room/valueObjects/roomType");
const roomPrice_1 = require("../../../../domain/entities/room/valueObjects/roomPrice");
class RoomRepositoryTypeOrm {
    constructor() {
        this.repository = config_1.AppDataSource.getRepository(Room_1.RoomTypeOrm);
    }
    getRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            const rooms = yield this.repository.find();
            return rooms.map((room) => new room_1.Room(new roomId_1.roomId(room.id), new roomNumber_1.roomNumber(room.number), new roomType_1.roomType(room.type), new roomPrice_1.roomPrice(room.price)));
        });
    }
    getRoomById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield this.repository.findOneBy({ id: id.value });
            return room
                ? new room_1.Room(new roomId_1.roomId(room.id), new roomNumber_1.roomNumber(room.number), new roomType_1.roomType(room.type), new roomPrice_1.roomPrice(room.price))
                : null;
        });
    }
    createRoom(room) {
        return __awaiter(this, void 0, void 0, function* () {
            const newRoom = this.repository.create({
                id: room.id.value,
                number: room.number.value,
                type: room.type.value,
                price: room.price.value,
            });
            yield this.repository.save(newRoom);
        });
    }
    updateRoom(room) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(room.id.value, {
                number: room.number.value,
                type: room.type.value,
                price: room.price.value,
            });
        });
    }
    deleteRoom(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id.value);
        });
    }
}
exports.RoomRepositoryTypeOrm = RoomRepositoryTypeOrm;
