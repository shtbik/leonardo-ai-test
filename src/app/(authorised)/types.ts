export type TGetCharactersQuery = {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
    results: {
      id: number;
      name: string;
      image: string;
    }[];
  };
};
