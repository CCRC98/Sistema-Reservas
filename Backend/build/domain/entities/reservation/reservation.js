"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
class Reservation {
    constructor(id, client_id, room_id, start_date, end_date, create_at) {
        this.id = id;
        this.client_id = client_id;
        this.room_id = room_id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.create_at = create_at;
        this.ensureReservation();
    }
    ensureReservation() {
        if (this.start_date.value > this.end_date.value) {
            throw new Error("La fecha de inicio no puede ser superior a la fecha de fin.");
        }
        if (!this.client_id.value || !this.room_id.value) {
            throw new Error("No puede existir una reservacion sin cliente o sin habitacion.");
        }
        if (this.create_at.value > this.start_date.value) {
            throw new Error("No es posible tener una reservacion con fecha de inicio inferior a la fecha de creacion.");
        }
    }
}
exports.Reservation = Reservation;
