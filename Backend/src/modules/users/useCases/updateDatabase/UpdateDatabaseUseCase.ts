import { inject, injectable } from 'tsyringe';
import { User } from '../../infra/typeorm/entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class UpdateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.repository.updateDatabase();

    return users;
  }
}
