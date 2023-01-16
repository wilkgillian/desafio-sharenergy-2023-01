import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UsersContextProviderProps {
  children: ReactNode;
}

interface UsersProps {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
  username: string;
  id: string;
  //   name: null | string;
  //   username: null | string;
  //   created_at?: null | Date;
  //   image: null | string;
  //   email: null | string;
  //   age: null | string;
  //   password: null | string;
  //   tel: null | number;
  //   address: null | string;
    cpf: number;
}

interface UserContextProps {
  users: UsersProps[];
  loading: boolean;
  updateUser: (cpf: number) => void;
}

const UsersContext = createContext({} as UserContextProps);

export function UsersContextProvider({ children }: UsersContextProviderProps) {
  const [loading, setLoading] = useState(true);
  const [fakeUsers, setFakeUsers] = useState([]);

  function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users"));
    // console.log(JSON.parse(users))
    setFakeUsers(users);
    // dispatch(
    //   addUser({
    //     id: randomBytes(9).toString("hex"),
    //     name: users.name.first + users.name.last,
    //     username: users.login.username,
    //     created_at: new Date().getTime(),
    //     image: users.picture.thumbnail,
    //     email: users.email,
    //     age: users.registered.age,
    //     password: users.login.password,
    //     tel: users.phone,
    //     address: users.location.street + users.location.number,
    //     cpf: randomBytes(9),
    //   })
    // );
}

const users: UsersProps[] = fakeUsers.map((user) => {
  return {
    id: user.login.uuid,
    firstName: user.name.first,
    lastName: user.name.last,
    email: user.email,
    image: user.picture.thumbnail,
    age: user.registered.age,
    username: user.login.username,
    cpf: user.id.value
  };
});

  function updateUser(cpf: number) {
    users
    if(cpf == fakeUsers.find(({cpf}) => cpf)){
        console.log(cpf)
    }else{
        console.log("not found")
    }
    // if(users.find(cpf)){
    //     users

    // }
  }
  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.get(
        "https://randomuser.me/api/?results=500"
      );
      localStorage.setItem("users", JSON.stringify(data.results));
    }
    // setTimeout(() => {
    getUsers();
    loadUsers();
    // }, 5);
    setLoading(false);
  }, []);


  return (
    <UsersContext.Provider value={{ users, loading, updateUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export const useUsersContext = () => useContext(UsersContext);
