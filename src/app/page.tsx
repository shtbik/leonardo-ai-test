import { cookies } from "next/headers";

type TSessionData = {
  username: string;
  job: string;
};

export async function getSessionData(): Promise<TSessionData> {
  const user = cookies().get("auth")?.value;
  return JSON.parse(user || "");
}

export default async function Home() {
  const user = await getSessionData();

  return (
    <div>
      <main>
        <h1>Hello, {user.username}!</h1>
      </main>
    </div>
  );
}
