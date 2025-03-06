import { roomId } from "./valueObjects/roomId";
import { roomNumber } from "./valueObjects/roomNumber";
import { roomPrice } from "./valueObjects/roomPrice";
import { roomType } from "./valueObjects/roomType";

export class Room {
  id: roomId;
  number: roomNumber;
  type: roomType;
  price: roomPrice;

  constructor(
    id: roomId,
    number: roomNumber,
    type: roomType,
    price: roomPrice
  ) {
    this.id = id;
    this.number = number;
    this.type = type;
    this.price = price;
  }
}
