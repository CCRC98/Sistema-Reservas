export class ReservationCreateAt {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureCreateAt();
  }

  ensureCreateAt() {
    if (this.value != new Date()) {
      throw new Error(
        "La fecha de creacion de la reserva no puede ser diferente a la fecha actual."
      );
    }
  }
}
