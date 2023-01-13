import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, useUser } from "../redux/sliceUsers";
import CardUser from "./CardUser";
import Pagination from "./Pagination";

function UsersList() {
  const userInfos = useSelector(useUser);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [fakeUsers, setFakeUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.get(
        "https://randomuser.me/api/?results=500"
      );
      localStorage.setItem("users", JSON.stringify(data.results));
    }
    getUsers();
    setLoading(false);
  }, []);

  function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users"));
    // console.log(JSON.parse(users))
    setFakeUsers(users);
  }
  loadUsers();
  const users = fakeUsers.map((user) => {
    return {
      firstName: user.name.first,
      lastName: user.name.last,
      email: user.email,
      image: user.picture.thumbnail,
      age: user.registered.age,
      username: user.login.username,
    };
  });

  // localStorage.setItem("users", JSON.stringify(fakeUsers));
  // function addUsersToLocalStorage() {
  //   const user = users[0]
  //     dispatch(addUser({ name: user.firstName }));
  // }
  // addUsersToLocalStorage();
  // const data = localStorage.getItem('users')
  // setFakeUsers(data.results);
  console.log(users);
  return (
    <Box overflowY="hidden" w="90%">
      <Pagination
        totalCountRegisters={fakeUsers.length}
        currentPage={page}
        onPageChange={setPage}
      />
      <Grid
        w="full"
        templateColumns="repeat(3, 1fr)"
        gap={6}
        h="full"
        overflowY="scroll"
        bg="gray.800"
        padding="3rem"
      >
        {/* {loading ? (
          <Box w="full" h="full" bg="gray.100">
            <Spinner />
          </Box>
        ) : (
          <>
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
          </>
        )} */}
      </Grid>
    </Box>
  );
}

export default UsersList;
