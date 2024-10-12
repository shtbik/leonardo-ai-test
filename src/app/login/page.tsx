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
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

type TInitialValues = {
  username: string;
  job: string;
};

type TFormState = {
  success?: boolean;
  message?: string;
  description?: string;
};

type LoginProps = {
  initialValues: TInitialValues;
};

export default function Login({ initialValues }: Readonly<LoginProps>) {
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

  const [state, formAction] = useFormState<TFormState, FormData>(
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
