"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientName = void 0;
var clientName = /** @class */ (function () {
    function clientName(value) {
        this.value = value;
        this.ensureName();
    }
    clientName.prototype.ensureName = function () {
        if (this.value.length < 3) {
            throw new Error("El nombre debe tener mas de tres caracteres.");
        }
    };
    return clientName;
}());
exports.clientName = clientName;
