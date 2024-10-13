import type { Metadata } from "next";

import { getSessionData } from "@/utils/session";
import { ClientProviders } from "@/providers/ClientProviders";
import AuthProvider, { AuthContextInitialValue } from "@/providers/Auth";

export const metadata: Metadata = {
  title: "Leonardo AI Test",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = (await getSessionData()) || AuthContextInitialValue;

  return (
    <html lang="en">
      <body>
        <AuthProvider user={user}>
          <ClientProviders>{children}</ClientProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
