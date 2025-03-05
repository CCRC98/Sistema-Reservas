"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientName = void 0;
class clientName {
    constructor(value) {
        this.value = value;
        this.ensureName();
    }
    ensureName() {
        if (this.value.length < 3) {
            throw new Error("El nombre debe tener mas de 3 caracteres.");
        }
    }
}
exports.clientName = clientName;
