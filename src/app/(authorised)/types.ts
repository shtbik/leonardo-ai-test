import type { LinkProps } from "next/link";
import type { PropsWithChildren } from "react";

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

export type TGetCharactersQueryVariables = {
  page?: number;
};

export type NavLinkProps = PropsWithChildren<Omit<LinkProps, "as">>;
