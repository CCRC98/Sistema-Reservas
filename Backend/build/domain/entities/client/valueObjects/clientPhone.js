"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientPhone = void 0;
class clientPhone {
    constructor(value) {
        this.value = value;
        this.ensurePhone();
    }
    ensurePhone() {
        if (this.value.length < 5 || this.value.length > 10) {
            throw new Error("El numero de telefono debe tener mas de 5 y menos de 10 digitos.");
        }
    }
}
exports.clientPhone = clientPhone;
