import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../infra/typeorm/entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    created_at,
    image,
    email,
    age,
    password,
    tel,
    address,
    cpf
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.repository.findByUsername(username);
    if (userAlreadyExists) {
      throw new Error('Usuário já existe');
    }

    const user = await this.repository.create({
      name,
      username,
      created_at,
      image,
      email,
      age,
      password,
      tel,
      address,
      cpf
    });

    return user;
  }
}
