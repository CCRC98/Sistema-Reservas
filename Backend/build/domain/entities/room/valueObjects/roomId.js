"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomId = void 0;
class roomId {
    constructor(value) {
        this.value = value;
    }
    ensureId() {
        if (this.value < 0) {
            throw new Error("Id no valido, el id no puede tener un valor negativo.");
        }
    }
}
exports.roomId = roomId;
