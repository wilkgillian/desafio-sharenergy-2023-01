import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  useDisclosure,
  Button,
  Text,
  Avatar,
  VStack,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaCrown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function UserProfileModal() {
  const [isMaster, setIsMaster] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Icon as={IoIosArrowDown} onClick={onOpen} fontSize="28">
        Open Modal
      </Icon>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.700">
          <DrawerCloseButton size="lg" color="gray.200" />

          <DrawerBody>
            <VStack pt={24} gap={8}>
              {isMaster ? (
                <Center w="full">
                  <Center fontSize={60} position="absolute" zIndex={1} top={14} mr={7}>
                    <Icon as={FaCrown} transform="rotate(-15deg)" color="yellow.400" />
                  </Center>
                  <Avatar
                    src="http://github.com/wilkgillian.png"
                    size="2xl"
                    border="4px solid #cfcfcf"
                    boxShadow="dark-lg"
                  position="relative"
                  />
                </Center>
              ) : (
                <>
                  <Avatar
                    src="http://github.com/wilkgillian.png"
                    size="2xl"
                    border="4px solid #cfcfcf"
                    boxShadow="dark-lg"
                  />
                </>
              )}
              <Text as="h1" fontWeight="bold" fontSize={24} color="gray.200">
                Wilk Gillian
              </Text>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" colorScheme="teal" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="green">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default UserProfileModal;
