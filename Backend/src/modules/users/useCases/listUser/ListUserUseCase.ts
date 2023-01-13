import { IUsersRepository } from '../../repositories/IUsersRepository';
import { User } from '../../infra/entities/User';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRespository: IUsersRepository
  ) {}
  async execute(): Promise<User[]> {
    const users = await this.usersRespository.list();

    return users;
  }
}
