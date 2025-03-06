"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContainer = void 0;
const clientRepository_1 = require("../infrastructure/persistence/typeorm/repositories/clientRepository");
const createClient_1 = require("../application/use-cases/client/createClient");
const deleteClient_1 = require("../application/use-cases/client/deleteClient");
const getClientById_1 = require("../application/use-cases/client/getClientById");
const getClients_1 = require("../application/use-cases/client/getClients");
const updateClient_1 = require("../application/use-cases/client/updateClient");
const roomRepository_1 = require("../infrastructure/persistence/typeorm/repositories/roomRepository");
const getRooms_1 = require("../application/use-cases/room/getRooms");
const getRoomById_1 = require("../application/use-cases/room/getRoomById");
const createRoom_1 = require("../application/use-cases/room/createRoom");
const updateRoom_1 = require("../application/use-cases/room/updateRoom");
const deleteRoom_1 = require("../application/use-cases/room/deleteRoom");
const ClientRepository = new clientRepository_1.ClientRepositoryTypeOrm();
const RoomRepository = new roomRepository_1.RoomRepositoryTypeOrm();
exports.ServiceContainer = {
    client: {
        getClients: new getClients_1.GetClients(ClientRepository),
        getClientById: new getClientById_1.GetClientById(ClientRepository),
        createClient: new createClient_1.CreateClient(ClientRepository),
        updateClient: new updateClient_1.UpdateClient(ClientRepository),
        deleteClient: new deleteClient_1.DeleteClient(ClientRepository),
    },
    room: {
        getRooms: new getRooms_1.GetRooms(RoomRepository),
        getRoomById: new getRoomById_1.GetRoomById(RoomRepository),
        createRoom: new createRoom_1.CreateRoom(RoomRepository),
        updateRoom: new updateRoom_1.UpdateRoom(RoomRepository),
        deleteRoom: new deleteRoom_1.DeleteRoom(RoomRepository),
    },
};
