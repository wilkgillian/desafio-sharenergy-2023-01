import {
  AspectRatio,
  Box,
  Button,
  Image,
  Text,
  VStack
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import Dashboard from '../components/Dashboard';
import Layout from '../components/Layout';

function Dogs() {
  const [randomDog, setRandomDog] = useState('');
  const randomDogURL = 'https://random.dog/';

  const extension_img = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
  const extension_video = ['mp4', 'mpeg', 'wmv'];

  async function handleGenerateDog() {
    const dog = Math.floor(Math.random() * 200);
    const { data } = await axios.get(`${randomDogURL}doggos/`);
    setRandomDog(data[dog]);
  }
  function verifyExtension(file: string) {
    {
      extension_img.map(ext => {
        if (file.match(ext)) {
          return true;
        } else {
          return false;
        }
      });
    }
  }
  verifyExtension(randomDog);
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
        {/* {extension_img.map(ext => {
          if (randomDog.match(ext)) */}
        {verifyExtension ? (
          <Image src={randomDogURL + randomDog} alt="Random dog" />
        ) : (
          <AspectRatio maxW="560px" ratio={1}>
            <iframe
              title="naruto"
              src={randomDogURL + randomDog}
              allowFullScreen
            />
          </AspectRatio>
        )}
        {/* })} */}
      </Dashboard>
    </Layout>
  );
}

export default Dogs;
