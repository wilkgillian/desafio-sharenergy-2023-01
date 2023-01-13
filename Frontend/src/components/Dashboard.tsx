import { Flex, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DashboardProps {
  title: string;
  children: ReactNode;
}

function Dashboard({ title, children }: DashboardProps) {
  return (
    <Flex
      w="100%"
      h="100vh"
      bg="gray.800"
      alignItems="center"
      position="relative"
      justifyContent="center"
      padding="6rem 2rem 2rem 8rem"
    >
      <VStack width="100%" height="100%">
        <Flex
          w="100%"
          h={100}
          alignItems="center"
          justifyContent="center"
          borderRadius={20}
        >
          <Text textAlign="center" fontSize={32} fontWeight="bold">
            {title}
          </Text>
        </Flex>
        {children}
      </VStack>
    </Flex>
  );
}

export default Dashboard;
