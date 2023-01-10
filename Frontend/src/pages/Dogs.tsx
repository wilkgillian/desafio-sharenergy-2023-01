import { Box, Button, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";
import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";

function Dogs() {
  const [randomDog, setRandomDog] = useState("");
  const [loading, setLoading] = useState(false);
  const randomDogURL = "https://random.dog/";

  async function handleGenerateDog() {
    const dog = Math.floor(Math.random() * 200);
    const { data } = await axios.get(`${randomDogURL}doggos/`);
    setRandomDog(data[dog]);
  }

  useEffect(() => {
    setLoading(true);
    handleGenerateDog();
    setLoading(false);
  }, []);

  return (
    <Layout>
      <Dashboard title="Random Dogs">
        <VStack alignItems="center" justifyContent="center" gap={6}>
          <Text fontSize={24}>
            Pressione o botão abaixo para gerar uma nova imagem
          </Text>
          <Button onClick={handleGenerateDog}>
            <BiRefresh fontSize={24} />
          </Button>
        </VStack>
        {loading ? (
          <Box w="full" h="full">
            <Spinner size="lg" />
          </Box>
        ) : (
          <Image
            src={randomDogURL + randomDog}
            alt="Random dog"
            w={500}
            h={500}
          />
        )}
      </Dashboard>
    </Layout>
  );
}

export default Dogs;
