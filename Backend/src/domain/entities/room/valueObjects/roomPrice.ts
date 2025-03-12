export class roomPrice {
  value: number;

  constructor(value: number) {
    this.value = value;
    this.ensurePrice();
  }

  private ensurePrice() {
    if (this.value < 0) {
      throw new Error("Precio de habitacion no valido.");
    }
  }
}
