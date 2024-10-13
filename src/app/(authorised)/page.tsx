"use client";

import { gql, useQuery } from "@apollo/client";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import Card from "@/components/Card";
import type { TGetCharactersQuery } from "./types";

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
  const { data, loading, error } =
    useQuery<TGetCharactersQuery>(CHARACTERS_QUERY);

  if (loading) {
    return (
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
        h="300px"
      >
        <Spinner size="xl" />
      </Stack>
    );
  }

  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>An issue occurred!</AlertTitle>
        <AlertDescription>Try again later.</AlertDescription>
      </Alert>
    );

  return (
    <SimpleGrid minChildWidth="250px" spacing="40px" pt={6}>
      {data?.characters.results.map(({ id, name, image }) => (
        <Card key={id} image={image} heading={name} />
      ))}
    </SimpleGrid>
  );
}
