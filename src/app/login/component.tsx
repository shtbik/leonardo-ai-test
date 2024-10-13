"use client";

import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import type { LoginProps, TFormState } from "./types";

export function Login({
  heading = "Welcome",
  initialValues,
  buttonProps,
}: LoginProps) {
  const { children: buttonLabel = "Login", ...restButtonProps } =
    buttonProps || {};
  const { push, refresh } = useRouter();

  const handleSubmit = async (
    _currentState: TFormState,
    formData: FormData,
  ): Promise<TFormState> => {
    const data = Object.fromEntries(formData.entries());
    try {
      await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      push("/");
      refresh();
      return { success: true };
    } catch {
      return {
        success: false,
        message: "An error occurred!",
        description: "Try again later.",
      };
    }
  };

  const [state, formAction, isPending] = useFormState<TFormState, FormData>(
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
        <Heading>{heading}</Heading>
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
              <Input
                name="username"
                placeholder="Username"
                required
                defaultValue={initialValues?.username}
              />
              <Input
                name="job"
                placeholder="Job title"
                required
                defaultValue={initialValues?.job}
              />
              <Button
                type="submit"
                variant="solid"
                width="full"
                isDisabled={isPending}
                isLoading={isPending}
                colorScheme="blue"
                {...restButtonProps}
              >
                {buttonLabel}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
