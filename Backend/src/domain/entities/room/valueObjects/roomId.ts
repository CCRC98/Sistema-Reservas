export class roomId {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  private ensureId() {
    if (this.value < 0) {
      throw new Error("Id no valido, el id no puede tener un valor negativo.");
    }
  }
}
