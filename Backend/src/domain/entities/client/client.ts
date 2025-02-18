import { clientId } from "./clientId";
import { clientName } from "./clientName";
import { clientEmail } from "./clientEmail";
import { clientPhone } from "./clientPhone";

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
