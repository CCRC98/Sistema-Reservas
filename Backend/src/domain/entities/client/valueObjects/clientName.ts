export class clientName {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureName();
  }

  private ensureName() {
    if (this.value.length < 3) {
      throw new Error("El nombre debe tener mas de 3 caracteres.");
    }
  }
}
