"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomType = void 0;
class roomType {
    constructor(value) {
        this.value = value;
        this.ensureType();
    }
    ensureType() {
        if (this.value != "Single" &&
            this.value != "Double" &&
            this.value != "Suite") {
            throw new Error("Tipo de habitacion no valido, las habitaciones solo pueden ser Single, Double o Suite");
        }
    }
}
exports.roomType = roomType;
