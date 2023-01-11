import { container } from "tsyringe";
import { Request, Response } from "express";
import { uploadImageOnS3 } from "../../../../utils/uploadImage";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      id,
      name,
      username,
      created_at,
      image,
      email,
      age,
      password,
      tel,
      address,
      cpf,
    } = req.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    if (req.file && req.file != null) {
      const image_url = await uploadImageOnS3(req);
      await updateUserUseCase.execute(id, {
        image: image_url,
      });
    }
    const user = await updateUserUseCase.execute(id, {
      name,
      username,
      created_at,
      image,
      email,
      age,
      password,
      tel,
      address,
      cpf,
    });

    return res.status(201).json(user);
  }
}
