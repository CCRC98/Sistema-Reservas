import * as express from "express";
import { clientRouter } from "./infrastructure/routes/clientRoutes";
import { AppDataSource } from "./infrastructure/persistence/typeorm/config";

const app = express();

app.use(express.json());

app.use(clientRouter);

app.use(
  (
    err: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err instanceof Error) {
      console.error(err.stack);
      res.status(500).send(err.message);
    }

    console.error(err);
    res.status(500).send("Something broke");
  }
);

AppDataSource.initialize()
  .then(() => {
    console.log("Base de datos conectada satisfactoriamente.");

    app.listen(3000, () => {
      console.log("Servidor funcionando en el puerto 3000.");
    });
  })
  .catch((error) => console.error("Conexion a base de datos fallida.", error));
