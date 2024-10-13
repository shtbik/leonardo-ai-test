import type { StackProps, ThemeTypings } from "@chakra-ui/react";

export interface PaginationProps extends StackProps {
  onPageChange: (page: number) => void;
  currentPage: number;
  lastPage: number;
  nextPages: number[];
  previousPages: number[];
  siblingsCount: number;
  colorScheme?: ThemeTypings["colorSchemes"];
}
