import { gql } from "graphql-request";

export const CARD_FRAGMENT = gql`
  fragment CardFragment on Card {
    image {
      ...AssetFragment
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
