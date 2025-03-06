"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomPrice = void 0;
class roomPrice {
    constructor(value) {
        this.value = value;
    }
    ensurePrice() {
        if (this.value < 0) {
            throw new Error("Precio de habitacion no valido.");
        }
    }
}
exports.roomPrice = roomPrice;
