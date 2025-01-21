import { gql } from "graphql-request";
import { CARD_FRAGMENT } from "../fragments/card";
import { IMAGE_COMPONENT_FRAGMENT } from "../fragments/image-component";
import { LINK_COMPONENT_FRAGMENT } from "../fragments/link-component";

export const GET_CARD_BLOCK = gql`
  ${CARD_FRAGMENT}
  ${IMAGE_COMPONENT_FRAGMENT}
  ${LINK_COMPONENT_FRAGMENT}
  query GetCardBlock($id: String!) {
    cardBlock(id: $id) {
      __typename
      title
      layout
      cardsCollection {
        items {
          ...CardFragment
        }
      }
    }
  }
`;
