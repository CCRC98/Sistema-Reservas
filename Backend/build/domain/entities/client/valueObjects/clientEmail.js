"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientEmail = void 0;
class clientEmail {
    constructor(value) {
        this.value = value;
        this.ensureEmail();
    }
    ensureEmail() {
        if (!this.value.includes("@") || !this.value.includes(".")) {
            throw new Error("El email debe contener @ y .");
        }
    }
}
exports.clientEmail = clientEmail;
