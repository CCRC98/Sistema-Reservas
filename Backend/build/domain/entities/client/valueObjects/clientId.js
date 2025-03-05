"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientId = void 0;
class clientId {
    constructor(value) {
        this.value = value;
        this.ensureLengthId();
    }
    ensureLengthId() {
        if (this.value.length < 5) {
            throw new Error("Id debe tener mas de 5 caracteres");
        }
    }
}
exports.clientId = clientId;
