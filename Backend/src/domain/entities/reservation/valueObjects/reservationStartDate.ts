export class reservationStartDate {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureStartDate();
  }

  private ensureStartDate() {
    if (this.value < new Date()) {
      throw new Error(
        "Fecha de inicio no valida, la fecha de inicio no puede ser inferior a la fecha actual."
      );
    }
  }
}
