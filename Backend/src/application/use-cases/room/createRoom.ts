import { Room } from "../../../domain/entities/room/room";
import { roomId } from "../../../domain/entities/room/valueObjects/roomId";
import { roomNumber } from "../../../domain/entities/room/valueObjects/roomNumber";
import { roomPrice } from "../../../domain/entities/room/valueObjects/roomPrice";
import { roomType } from "../../../domain/entities/room/valueObjects/roomType";
import { IRoomRepository } from "../../../domain/repositories/IRoomRepository";

export class CreateRoom {
  constructor(private repository: IRoomRepository) {}

  async create(
    id: number,
    number: string,
    type: string,
    price: number
  ): Promise<void> {
    const existRoom = await this.repository.existRoom(new roomNumber(number));

    if (existRoom) {
      throw new Error("El numero de habitacion ya se encuentra registrado.");
    }

    const room = new Room(
      new roomId(id),
      new roomNumber(number),
      new roomType(type),
      new roomPrice(price)
    );

    return this.repository.createRoom(room);
  }
}
