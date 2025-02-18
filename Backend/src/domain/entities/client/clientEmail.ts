export class clientEmail {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureEmail();
  }

  private ensureEmail() {
    if (!this.value.includes("@") || !this.value.includes(".")) {
      throw new Error("El email debe contener @ y .");
    }
  }
}
