export class ReservationStartDate {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureStartDate();
  }

  private ensureStartDate() {
    if (this.value < new Date()) {
      throw new Error(
        "La fecha de inicio de la reserva no puede ser menor a la fecha de hoy."
      );
    }
  }
}
