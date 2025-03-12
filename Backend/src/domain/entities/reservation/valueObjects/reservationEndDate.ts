export class reservationEndDate {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureEndDate();
  }

  private ensureEndDate() {
    if (this.value < new Date()) {
      throw new Error(
        "Fecha de fin no valida, la fecha de finalizacion no puede ser inferior a la fecha actual."
      );
    }
  }
}
