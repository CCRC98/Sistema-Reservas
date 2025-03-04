"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientId = void 0;
var clientId = /** @class */ (function () {
    function clientId(value) {
        this.value = value;
        this.ensureLengthId();
    }
    clientId.prototype.ensureLengthId = function () {
        if (this.value.length < 5) {
            throw new Error("Id debe tener mas de 5 caracteres");
        }
    };
    return clientId;
}());
exports.clientId = clientId;
