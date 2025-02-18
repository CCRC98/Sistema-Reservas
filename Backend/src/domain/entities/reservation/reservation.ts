import { clientId } from "../client/clientId";
import { ReservationCreateAt } from "./reservationCreateAt";
import { ReservationEndDate } from "./reservationEndDate";
import { ReservationStartDate } from "./reservationStartDate";

export class Reservation {
  id: number;
  client: clientId;
  room: string;
  startDate: ReservationStartDate;
  endDate: ReservationEndDate;
  createAt: ReservationCreateAt;

  constructor(
    id: number,
    client: clientId,
    room: string,
    startDate: ReservationStartDate,
    endDate: ReservationEndDate,
    createAt: ReservationCreateAt
  ) {
    this.id = id;
    this.client = client;
    this.room = room;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createAt = createAt;
  }
}
