import { inject, injectable } from 'tsyringe';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { User } from '../../infra/typeorm/entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute(id: string, data: IUpdateUserDTO): Promise<User> {
    const user = await this.repository.update(data, id);

    return user;
  }
}
