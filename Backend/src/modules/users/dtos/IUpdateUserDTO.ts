export interface IUpdateUserDTO {
  id?: string;
  name?: string;
  username?: string;
  created_at?: string;
  image?: string;
  email?: string;
  age?: string;
  password?: string;
  tel?: number;
  address?: string;
  cpf?: number;
}

export interface IUpdateUserImage {
  id: string;
  image: string;
}
