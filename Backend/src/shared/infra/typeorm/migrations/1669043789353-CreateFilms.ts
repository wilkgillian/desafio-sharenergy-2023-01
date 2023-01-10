import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFilms1669043789353 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "films",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "movie_url",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "movie_banner",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "director",
            type: "varchar",
          },
          {
            name: "producer",
            type: "varchar",
          },
          {
            name: "release_date",
            type: "int",
          },
          {
            name: "running_time",
            type: "int",
          },
          {
            name: "rt_score",
            type: "int",
          },
          {
            name: "genre",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("films");
  }
}
