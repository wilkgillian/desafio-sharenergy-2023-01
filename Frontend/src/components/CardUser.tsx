import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import Link from "next/link";

interface UserProps {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  age: number;
  image: string;
}

function CardUser({
  firstname,
  lastname,
  email,
  username,
  age,
  image,
}: UserProps) {
  return (
    <HStack borderRadius={20} bg="gray.700" padding={5}>
      <Avatar
        border="2px solid gray"
        src={image}
        h={20}
        w={20}
        boxShadow="dark-lg"
      />
      <VStack w="full">
        <Link href="/user" passHref>
          <Text fontSize={24} fontWeight="bold">
            {firstname} {lastname}, {age}
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
