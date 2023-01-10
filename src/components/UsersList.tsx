import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import CardUser from './CardUser';
import Pagination from './Pagination';

function UsersList() {
  const fakeUsers = [
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1998',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1995',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1994',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1993',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1991',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1990',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1996',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1993',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1992',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk19900',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk19981',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk1955',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk19222',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk191111',
      age: 22
    },
    {
      name: 'Wilk Gillian',
      email: 'foo@example.com',
      username: '@wilk19331',
      age: 22
    }
  ];
  return (
    <Box overflowY="hidden">
      <Pagination />
      <Grid
        w="full"
        templateColumns="repeat(3, 1fr)"
        gap={6}
        h="full"
        overflowY="scroll"
        bg="gray.800"
        padding="3rem"
      >
        {fakeUsers.map(user => (
          <GridItem key={user.username}>
            <CardUser
              name={user.name}
              email={user.email}
              username={user.username}
              age={user.age}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default UsersList;
