import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const CHARACTER_QUERY = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;
