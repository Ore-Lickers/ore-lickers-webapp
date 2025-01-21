import { gql } from "graphql-request";

export const CARD_FRAGMENT = gql`
  fragment CardFragment on Card {
    image {
      ...ImageComponentFragment
    }
    title
    description {
      json
    }
    link {
      ...LinkComponentFragment
    }
  }
`;
