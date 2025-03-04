"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientPhone = void 0;
var clientPhone = /** @class */ (function () {
    function clientPhone(value) {
        this.value = value;
        this.ensurePhone();
    }
    clientPhone.prototype.ensurePhone = function () {
        if (this.value.length < 5 || this.value.length > 10) {
            throw new Error("El numero de telefono debe tener mas de 5 y menos de 10 digitos.");
        }
    };
    return clientPhone;
}());
exports.clientPhone = clientPhone;
