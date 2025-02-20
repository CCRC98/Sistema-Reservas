import { clientId } from "../valueObjects/client/clientId";
import { clientName } from "../valueObjects/client/clientName";
import { clientEmail } from "../valueObjects/client/clientEmail";
import { clientPhone } from "../valueObjects/client/clientPhone";

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
