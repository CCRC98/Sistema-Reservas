"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationId = void 0;
class reservationId {
    constructor(value) {
        this.value = value;
        this.ensureId();
    }
    ensureId() {
        if (this.value < 0) {
            throw new Error("Id no valido.");
        }
    }
}
exports.reservationId = reservationId;
