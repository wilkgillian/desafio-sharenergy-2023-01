import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUpdateUserDTO, IUpdateUserImage } from '../dtos/IUpdateUserDTO';
import { User } from '../infra/typeorm/entities/User';
export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByUsername(username: string): Promise<User>;
  updateDatabase(): Promise<User[]>;
  list(): Promise<User[]>;
  delete(id: string): Promise<string>;
  getOneUser(id: string): Promise<User>;
  update(data: IUpdateUserDTO, id: string): Promise<User>;
  updateUserImage({ id, image }: IUpdateUserImage): Promise<void>;
}
