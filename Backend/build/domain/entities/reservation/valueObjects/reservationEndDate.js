"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationEndDate = void 0;
class reservationEndDate {
    constructor(value) {
        this.value = value;
        this.ensureEndDate();
    }
    ensureEndDate() {
        if (this.value < new Date()) {
            throw new Error("Fecha de fin no valida, la fecha de finalizacion no puede ser inferior a la fecha actual.");
        }
    }
}
exports.reservationEndDate = reservationEndDate;
