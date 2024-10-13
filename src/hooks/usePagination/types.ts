export type UsePaginationProps = {
  total: number;
  page: number;
  itemsPerPage?: number;
  siblingsCount?: number;
};

export type UsePaginationReturnType = {
  totalPages: number;
  itemsPerPage: number;
  currentPage: number;
  lastPage: number;
  nextPages: number[];
  previousPages: number[];
  siblingsCount: number;
};
