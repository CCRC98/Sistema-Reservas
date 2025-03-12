"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationCreateAt = void 0;
class reservationCreateAt {
    constructor(value) {
        this.value = this.value;
        this.ensureCreateAt();
    }
    ensureCreateAt() {
        if (this.value != new Date()) {
            throw new Error("La fecha de creacion no puede ser diferente a la fecha actual.");
        }
    }
}
exports.reservationCreateAt = reservationCreateAt;
