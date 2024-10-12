import Link from "next/link";
import { getSessionData } from "@/utils/session";

export default async function Home() {
  const user = await getSessionData();

  return (
    <div>
      <main>
        <h1>
          Hello, {user.username} - {user.job}!
        </h1>

        <p>
          <Link href="/profile">Update</Link> profile
        </p>
      </main>
    </div>
  );
}
