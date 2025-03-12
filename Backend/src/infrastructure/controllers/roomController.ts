import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../shared/serviceContainer";

export class RoomController {
  async getRooms(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const rooms = await ServiceContainer.room.getRooms.getAll();

      return res.status(200).json(rooms);
    } catch (error) {
      next(error);
    }
  }

  async getRoomById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const room = await ServiceContainer.room.getRoomById.getById(
        parseInt(req.params.id, 10)
      );

      return res.status(200).json(room);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(200).json({ message: error.message });
      }

      next(error);
    }
  }

  async createRoom(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id, number, type, price } = req.body as {
        id: number;
        number: string;
        type: string;
        price: number;
      };

      await ServiceContainer.room.createRoom.create(id, number, type, price);

      return res.status(201).json({ message: "Habitacion creada" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(200).json(error.message);
      }
      next(error);
    }
  }

  async updateRoom(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const { id, number, type, price } = req.body as {
        id: number;
        number: string;
        type: string;
        price: number;
      };

      await ServiceContainer.room.updateRoom.update(id, number, type, price);

      return res.status(204).json({ message: "Actualizacion exitosa." });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(200).json({ message: error.message });
      }
      next(error);
    }
  }

  async deleteRoom(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      await ServiceContainer.room.deleteRoom.delete(
        parseInt(req.params.id, 10)
      );

      return res.status(204).json({ message: "Habitacion eliminada." });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(200).json({ message: error.message });
      }
      next(error);
    }
  }
}
