import { Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "../PaginationItem";
import type { PaginationProps } from "./types";

// Inspired by https://github.com/mnzsss/react-chakra-pagination

export function Pagination({
  currentPage,
  lastPage,
  previousPages,
  nextPages,
  siblingsCount,
  onPageChange,
  colorScheme = "blue",
  ...props
}: PaginationProps) {
  return (
    <Stack direction="row" align="center" spacing={6} {...props}>
      <Stack direction="row" spacing={4}>
        {currentPage > 1 + siblingsCount ? (
          <>
            <PaginationItem
              colorScheme={colorScheme}
              onPageChange={onPageChange}
              page={1}
            />

            {currentPage > 2 + siblingsCount ? (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            ) : null}
          </>
        ) : null}

        {previousPages.length > 0
          ? previousPages.map((page) => (
              <PaginationItem
                colorScheme={colorScheme}
                onPageChange={onPageChange}
                page={page}
                key={page}
              />
            ))
          : null}

        <PaginationItem
          colorScheme={colorScheme}
          onPageChange={onPageChange}
          page={currentPage}
          isCurrent
        />

        {nextPages.length > 0
          ? nextPages.map((page) => (
              <PaginationItem
                colorScheme={colorScheme}
                onPageChange={onPageChange}
                page={page}
                key={page}
              />
            ))
          : null}

        {currentPage + siblingsCount < lastPage ? (
          <>
            {currentPage + 1 + siblingsCount < lastPage ? (
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
            ) : null}
            <PaginationItem
              colorScheme={colorScheme}
              onPageChange={onPageChange}
              page={lastPage}
            />
          </>
        ) : null}
      </Stack>
    </Stack>
  );
}
