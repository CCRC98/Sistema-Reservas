export class ReservationEndDate {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureEndDate();
  }

  ensureEndDate() {
    if (this.value < new Date()) {
      throw new Error(
        "La fecha final de la reservacion no puede ser menor a la fecha actual."
      );
    }
  }
}
