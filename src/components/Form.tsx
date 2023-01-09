import {
  Text,
  Button,
  Checkbox,
  Input,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent } from "react";

function Form() {
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("Home");
  }
  return (
    <VStack as="form" gap={4} w="full" onSubmit={handleSubmit}>
      <Input h="4rem" type="email" placeholder="Nome de usuário" />
      <Input h="4rem" type="password" placeholder="Senha" />
      <Checkbox defaultChecked colorScheme="green" alignSelf="flex-start">
        Lembrar de mim
      </Checkbox>
      <Button
        type="submit"
        bg="green.500"
        fontSize={20}
        w="full"
        h="4rem"
        fontWeight="bold"
      >
        Entrar
      </Button>
      <Text>
        Não possui cadastro? Faça{" "}
        <Link href="/SignUp" passHref>
          <ChakraLink color="green.600" fontWeight="bold">
            aqui.
          </ChakraLink>
        </Link>{" "}
      </Text>
    </VStack>
  );
}

export default Form;
