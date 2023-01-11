import { Repository, getMongoManager } from "typeorm";
import myDataSource from "../../../../../shared/infra/typeorm";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { v4 as uuidV4 } from "uuid";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";
import { api } from "../../../services/api";
import { IUpdateUserDTO, IUpdateUserImage } from "../../../dtos/IUpdateUserDTO";

export class UserRepository implements IUsersRepository {
  private users: Repository<User>;

  constructor() {
    this.users = myDataSource.getMongoRepository(User);
  }

  async create({
    // id,
    name,
    username,
    // created_at,
    image,
    email,
    age,
    password,
    tel,
    address,
    cpf,
  }: ICreateUserDTO): Promise<User> {
    const user = this.users.create({
      name,
      username,
      // created_at,
      image,
      email,
      age,
      password,
      tel,
      address,
      cpf,
      id: uuidV4(),
    });

    const manager = myDataSource.mongoManager
    await manager.save(user);

    return user;
  }
  async updateDatabase(): Promise<User[]> {
    try {
      const { data } = await api.get("/users");
      data.map((dat: ICreateUserDTO) => {
        const user = this.users.create({
          id: dat.id,
          name: dat.name,
          username: dat.username,
          created_at: dat.created_at,
          image: dat.image,
          email: dat.email,
          age: dat.age,
          password: dat.password,
          tel: dat.tel,
          address: dat.address,
          cpf: dat.cpf,
        });
        this.users.save(user);
      });
    } catch {
      throw new Error("Falha ao obter dados");
    }
    const users = await this.users.find();
    return users;
  }
  async list(): Promise<User[]> {
    try {
      const users = await this.users.find();
      // this.users.find({
      //   order: {
      //     created_at: "DESC",
      //   },
      // });
      return users;
    } catch {
      throw new Error("Falha ao obter dados");
    }
  }
  async findByUsername(username: string): Promise<User> {
    const user = await this.users.findOne({
      where: {
        username: username,
      },
    });
    return user;
  }
  async delete(id: string): Promise<string> {
    try {
      await this.users
        .createQueryBuilder("users")
        .delete()
        .from(User)
        .where({ id: id })
        .execute();
      return "Usuário deletado com sucesso";
    } catch {
      throw new Error("Erro ao deletar usuário");
    }
  }
  async update(data: IUpdateUserDTO, id: string): Promise<User> {
    try {
      const existentData = await this.users.findOne({
        where: {
          id: id,
        },
      });
      await this.users
        .createQueryBuilder()
        .update(User)
        .set({
          cpf: data.cpf ? data.cpf : existentData.cpf,
          name: data.name ? data.name : existentData.name,
          username: data.username ? data.username : existentData.username,
          password: data.password ? data.password : existentData.password,
          tel: data.tel ? data.tel : existentData.tel,
          image: data.image ? data.image : existentData.image,
          address: data.address ? data.address : existentData.address,
          created_at: data.created_at
            ? data.created_at
            : existentData.created_at,
          age: data.age ? data.age : existentData.age,
          email: data.email ? data.email : existentData.email,
        })
        .where({
          id: id,
        })
        .execute();

      const user = await this.users.findOne({
        where: {
          id: id,
        },
      });
      return user;
    } catch {
      throw new Error("Erro ao editar usuario");
    }
  }
  async updateUserImage({ id, image }: IUpdateUserImage): Promise<void> {
    await this.users
      .createQueryBuilder()
      .update(User)
      .set({
        image: image,
      })
      .where({
        id: id,
      })
      .execute();
  }
  async getOneUser(id: string) {
    const user = await this.users.findOne({
      where: {
        id: id,
      },
    });
    return user;
  }
}
