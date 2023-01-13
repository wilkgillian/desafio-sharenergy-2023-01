import { User } from '../../infra/entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class GetOneUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRespository: IUsersRepository
  ) {}
  async execute(id: string): Promise<User> {
    const user = await this.usersRespository.getOneUser(id);

    return user;
  }
}
