import { gql } from "graphql-request";

export const CARD_FRAGMENT = gql`
  fragment CardFragment on Card {
    layout
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
