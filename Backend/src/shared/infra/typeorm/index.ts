import { DataSource } from "typeorm";
import { User } from "../../../modules/users/infra/typeorm/entities/User";
import { migrations1673379729886 } from "./1673379729886-migrations";

const myDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "sharenergydb",
  // username: "docker",
  // password: "wilk1998",
  // entities: [User],
  // migrations: [migrations1673379729886],
});

export async function createConnection(
  host = "sharenergydb"
): Promise<DataSource> {
  return await myDataSource.setOptions({ host }).initialize();
}

export default myDataSource;
