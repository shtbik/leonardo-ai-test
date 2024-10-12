"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

type FormState = {
  success?: boolean;
  message?: string;
  description?: string;
};

export default function Login() {
  const { push } = useRouter();

  const handleSubmit = async (
    _currentState: FormState,
    formData: FormData,
  ): Promise<FormState> => {
    const data = Object.fromEntries(formData.entries());
    try {
      await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      push("/");
      return { success: true };
    } catch {
      return {
        success: false,
        message: "An error occurred!",
        description: "Try again later.",
      };
    }
  };

  const [state, formAction] = useFormState<FormState, FormData>(
    handleSubmit,
    {},
  );

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
          {state?.success === false && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              {state.message && <AlertTitle>{state.message}</AlertTitle>}
              {state.description && (
                <AlertDescription>{state.description}</AlertDescription>
              )}
            </Alert>
          )}

          <form action={formAction}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <Input name="username" placeholder="Username" required />
              </FormControl>
              <FormControl>
                <Input name="job" placeholder="Job title" required />
              </FormControl>
              <Submit />
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

function Submit() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="solid"
      width="full"
      isDisabled={pending}
      isLoading={pending}
    >
      Login
    </Button>
  );
}
