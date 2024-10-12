"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ApolloWrapper } from "./Apollo";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <ChakraProvider>{children}</ChakraProvider>
    </ApolloWrapper>
  );
}
