import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query getCountries {
    countries {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;
