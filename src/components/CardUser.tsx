import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { HiUserCircle } from 'react-icons/hi';
import Link from 'next/link';

interface UserProps {
  name: string;
  email: string;
  username: string;
  age: number;
}

function CardUser({ name, email, username, age }: UserProps) {
  return (
    <HStack borderRadius={20} bg="gray.700" padding={5}>
      <Avatar
        border="2px solid gray"
        src="https://github.com/wilkgillian.png"
        h={20}
        w={20}
        boxShadow="dark-lg"
      />
      <VStack w="full">
        <Link href="/user" passHref>
          <Text fontSize={24} fontWeight="bold">
            {name}, {age}
          </Text>
        </Link>
        <Box>
          <Flex alignItems="center" gap={2} fontSize={18}>
            <Icon as={MdEmail} />
            <Text>{email}</Text>
          </Flex>
          <Flex alignItems="center" gap={2} fontSize={18}>
            <Icon as={HiUserCircle} />
            <Text>{username}</Text>
          </Flex>
        </Box>
      </VStack>
    </HStack>
  );
}

export default CardUser;
