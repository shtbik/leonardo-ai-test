"use client";

import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Hello, World!</h1>

        <ol>
          <li>
            Chakra <Link href="/login">Link</Link> Component.
          </li>
        </ol>
      </main>
    </div>
  );
}
