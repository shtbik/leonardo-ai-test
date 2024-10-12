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

        <ul>
          <li>
            {" "}
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            {" "}
            <Link href="/info">Information</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
