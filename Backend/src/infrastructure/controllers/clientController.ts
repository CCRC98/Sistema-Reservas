import { Request, Response } from "express";
import { ServiceContainer } from "../../shared/serviceContainer";

export class ClientController {
  async getClients(req: Request, res: Response) {
    const client = await ServiceContainer.client.getClients.getClients();

    return res.json(client).status(200);
  }

  async getClientById(req: Request, res: Response) {
    const client = await ServiceContainer.client.getClientById.getClientById(
      req.params.id
    );

    if (!client) {
      return res.status(404).send();
    }

    return res.json(client).status(200);
  }

  async createClient(req: Request, res: Response) {
    const { id, name, email, phone } = req.body as {
      id: string;
      name: string;
      email: string;
      phone: string;
    };

    await ServiceContainer.client.createClient.createClient(
      id,
      name,
      email,
      phone
    );

    return res.status(201).send();
  }

  async updateClient(req: Request, res: Response) {
    const { id, name, email, phone } = req.body as {
      id: string;
      name: string;
      email: string;
      phone: string;
    };

    await ServiceContainer.client.updateClient.updateClient(
      id,
      name,
      email,
      phone
    );

    return res.status(204).send();
  }

  async DeleteClient(req: Request, res: Response) {
    await ServiceContainer.client.deleteClient.deleteClient(req.params.id);

    return res.status(204).send();
  }
}
