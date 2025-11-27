import { gql } from "graphql-request";

export const CARD_BLOCK_FRAGMENT = gql`
  fragment CardBlockFragment on CardBlock {
    title
    layout
    cardsCollection {
      items {
        ...CardFragment
      }
    }
  }
`;
