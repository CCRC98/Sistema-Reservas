"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientEmail = void 0;
var clientEmail = /** @class */ (function () {
    function clientEmail(value) {
        this.value = value;
        this.ensureEmail();
    }
    clientEmail.prototype.ensureEmail = function () {
        if (!this.value.includes("@") || !this.value.includes(".")) {
            throw new Error("El email debe contener @ y .");
        }
    };
    return clientEmail;
}());
exports.clientEmail = clientEmail;
