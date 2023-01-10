import { IFilmsRepository } from "../../repositories/IFilmsRepository";
import { Film } from "../../infra/typeorm/entities/Film";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListFilmUseCase {
  constructor(
    @inject("FilmsRepository")
    private filmsRespository: IFilmsRepository
  ) {}
  async execute(): Promise<Film[]> {
    const films = await this.filmsRespository.list();

    return films;
  }
}
