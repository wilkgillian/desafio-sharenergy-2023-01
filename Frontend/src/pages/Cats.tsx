import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Dashboard from "../components/Dashboard";

import Layout from "../components/Layout";
import { useEffect, useState } from "react";

function Cats() {
  const [status, setStatus] = useState("200");
  const [loading, setLoading] = useState(false);
  const URL_CATS = "https://http.cat/";
  const [cat, setCat] = useState("");
  function httpCat(status: string) {
    setCat(URL_CATS + status);
  }
  function handleSetStatus(status: string) {
    setStatus(status);
  }
  useEffect(() => {
    setLoading(true);
    httpCat(status);
    setLoading(false);
  }, []);
  return (
    <Layout>
      <Dashboard title="Cats">
        <Text fontSize={22}>
          Digite um status http válido para visualizar uma nova imagem:
        </Text>
        <Flex gap={2}>
          <Input
            w={300}
            type="number"
            required
            value={status}
            placeholder="Digite um status http válido"
            onChange={(event) => handleSetStatus(event.target.value)}
          />
          <Button type="submit" onClick={() => httpCat(status)}>
            <BsSearch />
          </Button>
        </Flex>
        {loading ? (
          <Box w="full" h="full">
            <Spinner size="lg" />
          </Box>
        ) : (
          <Image src={cat} alt="Cat Image" w={500} h={500} />
        )}
      </Dashboard>
    </Layout>
  );
}

export default Cats;
