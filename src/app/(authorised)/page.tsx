"use client";

import { useCallback } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  Alert,
  AlertIcon,
  SimpleGrid,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { Card } from "@/components/ui/Card";
import { CharacterModal } from "@/components/ui/Modals/Character";
import { Pagination } from "@/components/ui/Pagination";
import type { PaginationProps } from "@/components/ui/Pagination/types";
import { usePagination } from "@/hooks/usePagination";

import type {
  TGetCharacterQuery,
  TGetCharacterQueryVariables,
  TGetCharactersQuery,
  TGetCharactersQueryVariables,
} from "./types";
import type { TCharacter } from "@/types/character";
import { CHARACTER_QUERY, CHARACTERS_QUERY } from "./queries";

export default function Index() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, loading, error, refetch } = useQuery<
    TGetCharactersQuery,
    TGetCharactersQueryVariables
  >(CHARACTERS_QUERY, {
    variables: { page: Number(searchParams.get("page")) || 1 },
  });

  const [getCharacterQuery, getCharacterResponse] = useLazyQuery<
    TGetCharacterQuery,
    TGetCharacterQueryVariables
  >(CHARACTER_QUERY);

  const { results = [], info } = data?.characters || {};
  const { count = 0, pages = 0, next = 0 } = info || {};

  const { currentPage, lastPage, nextPages, previousPages, siblingsCount } =
    usePagination({
      total: count,
      page: (next || pages + 1) - 1,
      itemsPerPage: 20,
      siblingsCount: 1,
    });

  const handlePageChange = useCallback<PaginationProps["onPageChange"]>(
    (page) => {
      refetch({ page }).then(() => {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(page));
        replace(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, refetch, replace, searchParams],
  );

  const handleCardClick = useCallback(
    (id: TCharacter["id"]) => {
      onOpen();
      getCharacterQuery({ variables: { id } });
    },
    [getCharacterQuery, onOpen],
  );

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
        An issue occurred! Try again later.
      </Alert>
    );

  if (results.length === 0) {
    return (
      <Alert status="info">
        <AlertIcon />
        Results are empty
      </Alert>
    );
  }

  return (
    <>
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        lastPage={lastPage}
        nextPages={nextPages}
        previousPages={previousPages}
        siblingsCount={siblingsCount}
        mb={8}
      />

      <SimpleGrid minChildWidth="250px" spacing="32px" my={6}>
        {results.map(({ id, name, image }) => (
          <Card
            key={id}
            image={image}
            heading={name}
            onClick={() => handleCardClick(id)}
            cursor="pointer"
          />
        ))}
      </SimpleGrid>

      <CharacterModal
        isOpen={isOpen}
        onClose={onClose}
        loading={getCharacterResponse.loading}
        error={Boolean(getCharacterResponse.error)}
        character={getCharacterResponse.data?.character}
      />
    </>
  );
}
