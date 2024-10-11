"use client";

import {
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  Box,
  FormControl,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Heading>Welcome</Heading>
        <Box minW={{ sm: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <Input
                  type="string"
                  name="username"
                  placeholder="Username"
                  required
                />
              </FormControl>
              <FormControl>
                <Input
                  type="password"
                  name="job"
                  placeholder="Job title"
                  required
                />
              </FormControl>
              <Button type="submit" variant="solid" width="full">
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
