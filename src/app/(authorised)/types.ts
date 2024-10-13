import type { PropsWithChildren } from "react";
import type { LinkProps } from "next/link";
import type { TCharacter } from "@/types/character";

export type TGetCharactersQuery = {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
    results: {
      id: string;
      name: string;
      image: string;
    }[];
  };
};

export type TGetCharactersQueryVariables = {
  page?: number;
};

export type TGetCharacterQuery = {
  character: TCharacter;
};

export type TGetCharacterQueryVariables = {
  id: string;
};

export type NavLinkProps = PropsWithChildren<Omit<LinkProps, "as">>;
