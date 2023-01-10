import { inject, injectable } from 'tsyringe';
import { IUpdateUserImage } from '../../dtos/IUpdateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class UpdateUserImageUseCase {
  constructor(
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute({ id, image }: IUpdateUserImage): Promise<void> {
    await this.repository.updateUserImage({
      id: id,
      image: image
    });
  }
}
