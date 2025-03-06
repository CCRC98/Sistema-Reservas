import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Room" })
export class RoomTypeOrm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  type: string;

  @Column()
  price: number;
}
