import { DataSource } from "typeorm";
import { Film } from "../../../modules/films/infra/typeorm/entities/Film";
import { CreateFilms1669043789353 } from "./migrations/1669043789353-CreateFilms";

const myDataSource = new DataSource({
  type: "mongodb",
  port: 27017,
  host: "localhost",
  // username: "docker",
  // password: "wilk1998",
  database: "sharenergydb",
  entities: [Film],
  migrations: [CreateFilms1669043789353],
});

export async function createConnection(
  host = "sharenergydb"
): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
