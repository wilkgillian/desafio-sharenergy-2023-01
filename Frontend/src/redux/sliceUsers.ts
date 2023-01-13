import { createSlice } from "@reduxjs/toolkit";
import { randomUUID } from "crypto";

interface UserProps {
  id?: null | string;
  name: null | string;
  username: null | string;
  created_at?: null | Date;
  image: null | string;
  email: null | string;
  age: null | string;
  password: null | string;
  tel: null | number;
  address: null | string;
  cpf: null | number;
}

const INITIAL_STATE: UserProps = {
  id: "",
  name: "",
  username: "",
  created_at: null,
  image: "",
  email: "",
  age: "",
  password: "",
  tel: 0,
  address: "",
  cpf: 0,
};

const sliceUser = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    addUser(state, action) {
      return {
        id: "",
        name: action.payload.name,
        username: action.payload.username,
        created_at: action.payload.created_at,
        image: action.payload.image,
        email: action.payload.email,
        age: action.payload.age,
        password: action.payload.password,
        tel: action.payload.tel,
        address: action.payload.address,
        cpf: action.payload.cpf,
      };
    },
  },
});

export default sliceUser.reducer;
export const { addUser } = sliceUser.actions;

export const useUser = (state: any) => {
  return state.user as UserProps;
};
