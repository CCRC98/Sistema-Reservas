import { ClientRepositoryTypeOrm } from "../infrastructure/persistence/typeorm/repositories/clientRepository";
import { CreateClient } from "../application/use-cases/client/createClient";
import { DeleteClient } from "../application/use-cases/client/deleteClient";
import { GetClientById } from "../application/use-cases/client/getClientById";
import { GetClients } from "../application/use-cases/client/getClients";
import { UpdateClient } from "../application/use-cases/client/updateClient";
import { RoomRepositoryTypeOrm } from "../infrastructure/persistence/typeorm/repositories/roomRepository";
import { GetRooms } from "../application/use-cases/room/getRooms";
import { GetRoomById } from "../application/use-cases/room/getRoomById";
import { CreateRoom } from "../application/use-cases/room/createRoom";
import { UpdateRoom } from "../application/use-cases/room/updateRoom";
import { DeleteRoom } from "../application/use-cases/room/deleteRoom";

const ClientRepository = new ClientRepositoryTypeOrm();
const RoomRepository = new RoomRepositoryTypeOrm();

export const ServiceContainer = {
  client: {
    getClients: new GetClients(ClientRepository),
    getClientById: new GetClientById(ClientRepository),
    createClient: new CreateClient(ClientRepository),
    updateClient: new UpdateClient(ClientRepository),
    deleteClient: new DeleteClient(ClientRepository),
  },
  room: {
    getRooms: new GetRooms(RoomRepository),
    getRoomById: new GetRoomById(RoomRepository),
    createRoom: new CreateRoom(RoomRepository),
    updateRoom: new UpdateRoom(RoomRepository),
    deleteRoom: new DeleteRoom(RoomRepository),
  },
};
