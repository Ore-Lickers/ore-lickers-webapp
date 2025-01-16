import { gql } from "@apollo/client";
import { LINK_COMPONENT_FRAGMENT } from "../fragments/link-component";

export const GET_STATIC_PAGE = gql`
  ${LINK_COMPONENT_FRAGMENT}
  query GetStaticPage($id: String!) {
    staticPage(id: $id) {
      title
      overviewText {
        json
      }
      overviewButton {
        ...LinkComponentFragment
      }
      contentCollection {
        items {
          __typename
          ... on ContentBlock {
            _id
          }
        }
      }
    }
  }
`;
