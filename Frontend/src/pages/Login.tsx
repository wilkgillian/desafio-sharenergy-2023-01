import { Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import LoginAnimation from "../Animations/LoginAnimation";
import Form from "../components/Form";

function Login() {
  return (
    <HStack w="100%" h="100%" alignItems="center" justifyContent="center">
      <VStack w="40%" padding="0 6rem" gap={4}>
        <Text
          fontSize={28}
          fontWeight="extrabold"
          bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
          bgClip="text"
          textAlign="center"
        >
          Faça login para acessar a plataforma:
        </Text>
        <Form />
      </VStack>
      <Divider orientation="vertical" />
      <VStack w="60%">
        <Text as="h1" fontSize={42} fontWeight="bold">
          Economize com a Energia Solar!
        </Text>
        <Text as="p" fontSize={24}>
          Tenha ao seu lado uma equipe de especialistas em energia solar.
          <br />
          Economia, segurança e retorno do seu investimento garantidos.
        </Text>

        <LoginAnimation />
      </VStack>
    </HStack>
  );
}

export default Login;
