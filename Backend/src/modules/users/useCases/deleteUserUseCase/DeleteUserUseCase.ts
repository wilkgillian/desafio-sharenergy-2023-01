import { IUsersRepository } from '../../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRespository: IUsersRepository
  ) {}
  async execute(id: string): Promise<string> {
    await this.usersRespository.delete(id);

    return 'success';
  }
}
