import { Room } from "../../../domain/entities/room/room";
import { roomId } from "../../../domain/entities/room/valueObjects/roomId";
import { roomNumber } from "../../../domain/entities/room/valueObjects/roomNumber";
import { roomPrice } from "../../../domain/entities/room/valueObjects/roomPrice";
import { roomType } from "../../../domain/entities/room/valueObjects/roomType";
import { IRoomRepository } from "../../../domain/repositories/IRoomRepository";

export class UpdateRoom {
  constructor(private repository: IRoomRepository) {}

  async update(
    id: number,
    number: string,
    type: string,
    price: number
  ): Promise<void> {
    const existRoom = await this.repository.getRoomById(new roomId(id));

    if (existRoom == null) {
      throw new Error("Habitacion no encotrada.");
    }

    if (existRoom.number.value != number) {
      const numberInUse = await this.repository.existRoom(
        new roomNumber(number)
      );

      if (numberInUse) {
        throw new Error("El numero de habitacion ya se encuentra en uso.");
      }
    }

    const room = new Room(
      new roomId(id),
      new roomNumber(number),
      new roomType(type),
      new roomPrice(price)
    );

    return this.repository.updateRoom(room);
  }
}
