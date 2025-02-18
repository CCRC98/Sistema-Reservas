import { Reservation } from "../entities/reservation/reservation";

export interface ReservationRepository {
  createReservation(reservation: Reservation): Promise<void>;
  getReservations(): Promise<Reservation[]>;
  getReservationById(id: number): Promise<Reservation | null>;
  updateReservation(reservation: Reservation): Promise<void>;
  deleteReservation(id: number): Promise<void>;
}
