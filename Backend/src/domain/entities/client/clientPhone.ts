export class clientPhone {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensurePhone();
  }

  private ensurePhone() {
    if (this.value.length < 5 || this.value.length > 10) {
      throw new Error(
        "El numero de telefono debe tener mas de 5 y menos de 10 digitos."
      );
    }
  }
}
