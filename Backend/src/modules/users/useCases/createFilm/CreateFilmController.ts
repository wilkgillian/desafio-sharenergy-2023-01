import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { uploadImageOnS3 } from '../../../../utils/uploadImage';

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      username,
      // created_at,
      email,
      age,
      password,
      tel,
      address,
      cpf
    } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const image_url = await uploadImageOnS3(req);
    const user = await createUserUseCase.execute({
      name,
      username,
      // created_at,
      image: image_url,
      email,
      age,
      password,
      tel,
      address,
      cpf
    });

    return res.status(201).json(user);
  }
}
