"use client";

import { gql, useQuery } from "@apollo/client";

const CHARACTERS_QUERY = gql`
  query {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export default function Index() {
  const { data, loading, error } = useQuery(CHARACTERS_QUERY);

  if (loading) {
    return <div>loading.....</div>;
  }

  console.log({ data, loading, error });

  return <div>Information page</div>;
}
