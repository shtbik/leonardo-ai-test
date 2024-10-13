"use client";

import type { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "./Apollo";

export function ClientProviders({ children }: PropsWithChildren) {
  return (
    <ApolloProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ApolloProvider>
  );
}
