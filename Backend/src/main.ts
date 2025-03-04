import * as express from "express";
import { clientRouter } from "./infrastructure/routes/clientRoutes";

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

app.listen(3000, () => {
  console.log("Servidor corriendo en 3000");
});
