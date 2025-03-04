import { clientId } from "./valueObjects/clientId";
import { clientName } from "./valueObjects/clientName";
import { clientEmail } from "./valueObjects/clientEmail";
import { clientPhone } from "./valueObjects/clientPhone";

export class Client {
  id: clientId;
  name: clientName;
  email: clientEmail;
  phone: clientPhone;

  constructor(
    id: clientId,
    name: clientName,
    email: clientEmail,
    phone: clientPhone
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
