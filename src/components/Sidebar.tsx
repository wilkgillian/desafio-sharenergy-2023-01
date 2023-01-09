import { Box, VStack } from "@chakra-ui/react";
import { FaCat, FaDog, FaHome } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import NavLink from "./NavLink";

function Sidebar() {
  return (
    <Box
      boxShadow="2xl"
      w={100}
      bg="gray.800"
      h="100vh"
      zIndex={1}
      position="absolute"
      transition="0.2s"
      __css={{
        span: {
          display: "none",
        },
      }}
      _hover={{
        width: 400,
        span: {
          display: "block",
        },
      }}
      padding="10rem 2rem"
    >
      <VStack gap={6} w="full" alignItems="flex-start">
        <NavLink link="/" icon={FaHome} title="home" />
        <NavLink link="/" icon={FaDog} title="Random dog" />
        <NavLink link="/" icon={FaCat} title="http cat" />
        <NavLink link="/" icon={BsFillPeopleFill} title="usuários" />
      </VStack>
    </Box>
  );
}

export default Sidebar;
