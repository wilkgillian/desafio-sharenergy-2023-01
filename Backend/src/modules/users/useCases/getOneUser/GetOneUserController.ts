import { User } from '../../infra/typeorm/entities/User';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetOneUserUseCase } from './GetOneUserUseCase';

export class GetOneUserController {
  async handle(req: Request, res: Response): Promise<Response<User>> {
    const { id } = req.body;
    const getOneUsersUseCase = container.resolve(GetOneUserUseCase);
    const user = await getOneUsersUseCase.execute(id);
    return res.status(201).json(user);
  }
}
