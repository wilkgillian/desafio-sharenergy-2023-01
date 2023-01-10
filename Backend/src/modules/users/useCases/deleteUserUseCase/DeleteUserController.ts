import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.body;
    const deleteUsersUseCase = container.resolve(DeleteUserUseCase);
    await deleteUsersUseCase.execute(id);
    return res.status(201).send({ message: 'Usuário deletado com sucesso' });
  }
}
