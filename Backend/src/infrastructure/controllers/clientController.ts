import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../shared/serviceContainer";

export class ClientController {
  async getClients(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const client = await ServiceContainer.client.getClients.getAll();

      return res.json(client).status(200);
    } catch (error) {
      next(error);
    }
  }

  async getClientById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const client = await ServiceContainer.client.getClientById.getById(
        req.params.id
      );

      return res.json(client).status(200);
    } catch (error) {
      if (error) {
        return res.json(error).status(200);
      }

      next(error);
    }
  }

  async createClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id, name, email, phone } = req.body as {
        id: string;
        name: string;
        email: string;
        phone: string;
      };

      await ServiceContainer.client.createClient.create(id, name, email, phone);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async updateClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id, name, email, phone } = req.body as {
        id: string;
        name: string;
        email: string;
        phone: string;
      };

      await ServiceContainer.client.updateClient.update(id, name, email, phone);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async deleteClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      await ServiceContainer.client.deleteClient.delete(req.params.id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
