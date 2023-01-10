import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { uploadImageOnS3 } from '../../../../utils/uploadImage';
import { UpdateUserImageUseCase } from './UpdateUserImageUseCase';

export class UpdateUserImageController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const updateUserImageUseCase = container.resolve(UpdateUserImageUseCase);

    const image_url = await uploadImageOnS3(req);

    const film = await updateUserImageUseCase.execute({
      id: id,
      image: image_url
    });

    return res.status(201).json(film);
  }
}
