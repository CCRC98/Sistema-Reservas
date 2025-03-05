import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "Client" })
export class ClientTypeOrm {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
