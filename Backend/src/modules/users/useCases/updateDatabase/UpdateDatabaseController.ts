import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateUsersUseCase } from './UpdateDatabaseUseCase';

export class UpdateUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateUsersUseCase = container.resolve(UpdateUsersUseCase);
    const users = await updateUsersUseCase.execute();

    return res.status(201).json(users);
  }
}
