import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  username: string;

  @CreateDateColumn()
  created_at?: string;

  @Column()
  image: string;

  @Column()
  email: string;

  @Column()
  age: string;

  @Column()
  password: string;

  @Column()
  tel: number;

  @Column()
  address: string;

  @Column()
  cpf: number;

  constructor() {
    if (!this.id) {
      this.id = new ObjectId();
    }
  }
}
