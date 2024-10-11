import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Leonardo AI Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
