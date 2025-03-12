import { Room } from "../../../../domain/entities/room/room";
import { roomId } from "../../../../domain/entities/room/valueObjects/roomId";
import { IRoomRepository } from "../../../../domain/repositories/IRoomRepository";
import { Repository } from "typeorm";
import { AppDataSource } from "../config";
import { RoomTypeOrm } from "../entities/Room";
import { roomNumber } from "../../../../domain/entities/room/valueObjects/roomNumber";
import { roomType } from "../../../../domain/entities/room/valueObjects/roomType";
import { roomPrice } from "../../../../domain/entities/room/valueObjects/roomPrice";

export class RoomRepositoryTypeOrm implements IRoomRepository {
  private readonly repository: Repository<RoomTypeOrm>;

  constructor() {
    this.repository = AppDataSource.getRepository(RoomTypeOrm);
  }

  async existRoom(number: roomNumber): Promise<boolean> {
    const existRoom = await this.repository.exists({
      where: { number: number.value },
    });
    return existRoom;
  }

  async getRooms(): Promise<Room[]> {
    const rooms = await this.repository.find();
    return rooms.map(
      (room) =>
        new Room(
          new roomId(room.id),
          new roomNumber(room.number),
          new roomType(room.type),
          new roomPrice(room.price)
        )
    );
  }

  async getRoomById(id: roomId): Promise<Room | null> {
    const room = await this.repository.findOneBy({ id: id.value });
    return room
      ? new Room(
          new roomId(room.id),
          new roomNumber(room.number),
          new roomType(room.type),
          new roomPrice(room.price)
        )
      : null;
  }

  async createRoom(room: Room): Promise<void> {
    const newRoom = this.repository.create({
      id: room.id.value,
      number: room.number.value,
      type: room.type.value,
      price: room.price.value,
    });

    await this.repository.save(newRoom);
  }

  async updateRoom(room: Room): Promise<void> {
    await this.repository.update(room.id.value, {
      number: room.number.value,
      type: room.type.value,
      price: room.price.value,
    });
  }

  async deleteRoom(id: roomId): Promise<void> {
    await this.repository.delete(id.value);
  }
}
