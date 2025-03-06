import { Room } from "../../../domain/entities/room/room";
import { roomId } from "../../../domain/entities/room/valueObjects/roomId";
import { IRoomRepository } from "../../../domain/repositories/IRoomRepository";

export class GetRoomById {
  constructor(private repository: IRoomRepository) {}

  async getById(id: number): Promise<Room> {
    const room = await this.repository.getRoomById(new roomId(id));

    if (!room) {
      throw new Error("Habitacion no encontrada.");
    }

    return room;
  }
}
