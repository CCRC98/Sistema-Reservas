import { Room } from "../../../domain/entities/room/room";
import { IRoomRepository } from "../../../domain/repositories/IRoomRepository";

export class GetRooms {
  constructor(private repository: IRoomRepository) {}

  async getAll(): Promise<Room[]> {
    return this.repository.getRooms();
  }
}
