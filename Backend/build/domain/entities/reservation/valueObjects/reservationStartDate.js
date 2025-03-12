"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationStartDate = void 0;
class reservationStartDate {
    constructor(value) {
        this.value = value;
        this.ensureStartDate();
    }
    ensureStartDate() {
        if (this.value < new Date()) {
            throw new Error("Fecha de inicio no valida, la fecha de inicio no puede ser inferior a la fecha actual.");
        }
    }
}
exports.reservationStartDate = reservationStartDate;
