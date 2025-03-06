import { Room } from "../entities/room/room";
import { roomId } from "../entities/room/valueObjects/roomId";

export interface IRoomRepository {
  getRooms(): Promise<Room[]>;
  getRoomById(id: roomId): Promise<Room | null>;
  createRoom(room: Room): Promise<void>;
  updateRoom(room: Room): Promise<void>;
  deleteRoom(id: roomId): Promise<void>;
}
