export type TCharacter = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    id: string;
    name: string;
  };
  location: {
    id: string;
    name: string;
  };
  image: string;
};
