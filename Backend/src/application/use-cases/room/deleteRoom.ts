import { roomId } from "../../../domain/entities/room/valueObjects/roomId";
import { IRoomRepository } from "../../../domain/repositories/IRoomRepository";

export class DeleteRoom {
  constructor(private repository: IRoomRepository) {}

  async delete(id: number): Promise<void> {
    const Room = await this.repository.getRoomById(new roomId(id));

    if (!Room?.id.value) {
      throw new Error("Habitacion no encotrada.");
    }

    await this.repository.deleteRoom(new roomId(id));
  }
}
