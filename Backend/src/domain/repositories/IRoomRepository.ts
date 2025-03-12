import { Room } from "../entities/room/room";
import { roomId } from "../entities/room/valueObjects/roomId";
import { roomNumber } from "../entities/room/valueObjects/roomNumber";

export interface IRoomRepository {
  existRoom(number: roomNumber): Promise<boolean>;
  getRooms(): Promise<Room[]>;
  getRoomById(id: roomId): Promise<Room | null>;
  createRoom(room: Room): Promise<void>;
  updateRoom(room: Room): Promise<void>;
  deleteRoom(id: roomId): Promise<void>;
}
