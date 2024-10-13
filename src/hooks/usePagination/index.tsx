import { useMemo } from "react";
import type { UsePaginationProps, UsePaginationReturnType } from "./types";

export function usePagination({
  total,
  page,
  itemsPerPage = 10,
  siblingsCount = 1,
}: UsePaginationProps): UsePaginationReturnType {
  const currentPage = page;
  const lastPage = Math.ceil(total / itemsPerPage);
  const totalPages = lastPage === 0 ? 1 : lastPage;

  const previousPages = useMemo(
    () =>
      currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [],
    [currentPage, siblingsCount],
  );

  const nextPages = useMemo(
    () =>
      currentPage < lastPage
        ? generatePagesArray(
            currentPage,
            Math.min(currentPage + siblingsCount, lastPage),
          )
        : [],
    [currentPage, lastPage, siblingsCount],
  );

  return {
    currentPage,
    totalPages,
    lastPage,
    nextPages,
    previousPages,
    itemsPerPage,
    siblingsCount,
  };
}

function generatePagesArray(from: number, to: number): number[] {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0);
}
