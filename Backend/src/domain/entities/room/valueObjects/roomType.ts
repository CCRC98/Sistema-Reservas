export class roomType {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureType();
  }

  private ensureType() {
    if (
      this.value != "Single" &&
      this.value != "Double" &&
      this.value != "Suite"
    ) {
      throw new Error(
        "Tipo de habitacion no valido, las habitaciones solo pueden ser Single, Double o Suite"
      );
    }
  }
}
