import { Box, Button, Center, Icon } from '@chakra-ui/react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

function Pagination() {
  return (
    <Box w="full" mb={5}>
      <Center gap={2}>
        <Button>
          <Icon as={HiOutlineChevronLeft} />
        </Button>
        <Button>2</Button>
        <Button>...</Button>
        <Button>4</Button>
        <Button>
          <Icon as={HiOutlineChevronRight} />
        </Button>
      </Center>
    </Box>
  );
}

export default Pagination;
