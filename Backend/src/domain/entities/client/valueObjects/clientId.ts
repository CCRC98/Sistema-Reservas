export class clientId {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureLengthId();
  }

  private ensureLengthId() {
    if (this.value.length < 5) {
      throw new Error("Id debe tener mas de 5 caracteres");
    }
  }
}
