export class reservationId {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensureId();
  }

  private ensureId() {
    if (this.value < 0) {
      throw new Error("Id no valido.");
    }
  }
}
