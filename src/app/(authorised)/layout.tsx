"use client";

import Link from "next/link";
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Avatar,
  useDisclosure,
  Stack,
  IconButton,
  VStack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { useAuth } from "@/providers/Auth";
import type { NavLinkProps } from "./types";

const Links: NavLinkProps[] = [
  { children: "Dashboard", href: "/" },
  { children: "Profile", href: "/profile" },
];

export default function AuthorisedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((props) => (
                <NavLink key={props.href.toString()} {...props}>
                  {props.children}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <HStack>
              <Avatar size="sm" />
              <VStack alignItems="flex-start" spacing="1px" ml="2">
                <Text fontSize="sm">{user.username}</Text>
                <Text fontSize="xs" color="gray.600">
                  {user.job}
                </Text>
              </VStack>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map((props) => (
                <NavLink key={props.href.toString()} {...props}>
                  {props.children}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={8}>{children}</Box>
    </>
  );
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <Box
      as={Link}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
