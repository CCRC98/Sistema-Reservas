import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pg12345",
  database: "Sistema-Reservas",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
