import type { ThemeTypings } from "@chakra-ui/react";

export interface PaginationItemProps {
  isCurrent?: boolean;
  page: number;
  onPageChange: (page: number) => void;
  colorScheme?: ThemeTypings["colorSchemes"];
}
