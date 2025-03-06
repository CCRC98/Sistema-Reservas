import "reflect-metadata";
import { DataSource } from "typeorm";
import { ClientTypeOrm } from "./entities/Client";
import { RoomTypeOrm } from "./entities/Room";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pg12345",
  database: "Sistema-Reservas",
  synchronize: true,
  logging: false,
  entities: [ClientTypeOrm, RoomTypeOrm],
  subscribers: [],
  migrations: [],
});
