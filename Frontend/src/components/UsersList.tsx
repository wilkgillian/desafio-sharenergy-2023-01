import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { randomBytes, randomUUID } from "crypto";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUsersContext } from "../contexts/UsersContext";
import { addUser, useUser } from "../redux/sliceUsers";
import CardUser from "./CardUser";
import LoadingScreen from "./LoadingScreen";
import Pagination from "./Pagination";

function UsersList() {
  // const userInfos = useSelector(useUser);
  // const dispatch = useDispatch();

  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true);
  // const [fakeUsers, setFakeUsers] = useState([]);

  // function loadUsers() {
  //   const users = JSON.parse(localStorage.getItem("users"));
  //   // console.log(JSON.parse(users))
  //   setFakeUsers(users);
  //   // dispatch(
  //   //   addUser({
  //   //     id: randomBytes(9).toString("hex"),
  //   //     name: users.name.first + users.name.last,
  //   //     username: users.login.username,
  //   //     created_at: new Date().getTime(),
  //   //     image: users.picture.thumbnail,
  //   //     email: users.email,
  //   //     age: users.registered.age,
  //   //     password: users.login.password,
  //   //     tel: users.phone,
  //   //     address: users.location.street + users.location.number,
  //   //     cpf: randomBytes(9),
  //   //   })
  //   // );
  // }
  // // loadUsers();

  // useEffect(() => {
  //   async function getUsers() {
  //     const { data } = await axios.get(
  //       "https://randomuser.me/api/?results=500"
  //     );
  //     localStorage.setItem("users", JSON.stringify(data.results));
  //   }
  //   getUsers();
  //   setLoading(false);
  //   loadUsers();
  // }, []);

  // const a = useUsersContext()
  // console.log(a);

  // const users = fakeUsers.map((user) => {
  //   return {
  //     firstName: user.name.first,
  //     lastName: user.name.last,
  //     email: user.email,
  //     image: user.picture.thumbnail,
  //     age: user.registered.age,
  //     username: user.login.username,
  //   };
  // });

  const { users, loading, updateUser } = useUsersContext();
  console.log(users);
  function setPage() {}
  return (
    <Box overflowY="hidden" w="90%">
      <Pagination
        totalCountRegisters={users.length}
        currentPage={1}
        onPageChange={setPage}
      />
      <Button onClick={() => updateUser(42032776138)}>
        asa
      </Button>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Grid
          w="full"
          templateColumns="repeat(3, 1fr)"
          gap={6}
          h="full"
          overflowY="scroll"
          bg="gray.800"
          padding="3rem"
        >
          {users.map((user) => (
            <GridItem key={user.username}>
              <CardUser
                image={user.image}
                firstname={user.firstName}
                lastname={user.lastName}
                email={user.email}
                username={user.username}
                age={user.age}
              />
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default UsersList;
