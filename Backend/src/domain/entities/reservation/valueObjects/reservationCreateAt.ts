export class reservationCreateAt {
  value: Date;

  constructor(value: Date) {
    this.value = this.value;
    this.ensureCreateAt();
  }

  private ensureCreateAt() {
    if (this.value != new Date()) {
      throw new Error(
        "La fecha de creacion no puede ser diferente a la fecha actual."
      );
    }
  }
}
