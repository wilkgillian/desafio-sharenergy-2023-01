import { Box, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface NavLinkProps {
  icon: ElementType;
  link: string;
  title: string;
}

function NavLink({ icon, link, title }: NavLinkProps) {
  return (
    <Link href={link} passHref>
      <Box
        display="flex"
        alignItems="center"
        transition="0.2s"
        alignSelf="left"
        minW={200}
        w="full"
        _hover={{
          color: "cyan",
        }}
      >
        <Icon as={icon} fontSize={32} />
        <Text as="span" ml={4} fontSize={14} fontWeight="bold" textTransform="uppercase">
          {title}
        </Text>
      </Box>
    </Link>
  );
}

export default NavLink;
