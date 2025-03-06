import { roomId } from "../../../domain/entities/room/valueObjects/roomId";
import { IRoomRepository } from "../../../domain/repositories/IRoomRepository";

export class DeleteRoom {
  constructor(private repository: IRoomRepository) {}

  async delete(id: number): Promise<void> {
    await this.repository.deleteRoom(new roomId(id));
  }
}
