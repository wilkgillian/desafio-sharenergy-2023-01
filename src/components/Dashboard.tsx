import { Box, Center, Container, Flex, Text, VStack } from "@chakra-ui/react";

function Dashboard() {
  return (
    <Flex
      w="100%"
      h="100vh"
      bg="gray.700"
      alignItems="center"
      position="relative"
      justifyContent="center"
      overflowY="scroll"
      padding="8rem 2rem 0 8rem"
    >
      <VStack width="100%" height="100%" bg="pink.900">
        <Text>Dashboard</Text>
      </VStack>
    </Flex>
  );
}

export default Dashboard;
