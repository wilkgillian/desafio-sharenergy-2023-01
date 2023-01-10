import { Avatar, Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Logo from '../../public/assets/logo.png';

function Header() {
  return (
    <HStack
      w="full"
      h={24}
      bg="gray.800"
      padding="1rem 3rem"
      justifyContent="space-between"
      boxShadow="dark-lg"
      position="absolute"
      zIndex={2}
    >
      <Link href="/home" passHref>
        <Image src="./assets/logo.png" w={250} alt="Logo sharenergy" />
      </Link>
      <Flex
        cursor="pointer"
        w="15%"
        h="100%"
        alignItems="center"
        justifyContent="space-around"
        bg="gray.700"
        borderRadius={20}
        padding={2}
      >
        <Avatar h={10} w={10} src="http://github.com/wilkgillian.png" />
        <Text fontSize="lg">Wilk Gillian</Text>
      </Flex>
    </HStack>
  );
}

export default Header;
