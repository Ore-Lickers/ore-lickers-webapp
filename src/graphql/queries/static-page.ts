import { gql } from "graphql-request";
import { LINK_COMPONENT_FRAGMENT } from "../fragments/link-component";
import { ASSET_FRAGMENT } from "../fragments/asset";

export const GET_STATIC_PAGE = gql`
  ${LINK_COMPONENT_FRAGMENT}
  ${ASSET_FRAGMENT}
  query GetStaticPage($id: String!) {
    staticPage(id: $id) {
      title
      overviewText {
        json
        links {
          assets {
            block {
              ...AssetFragment
            }
          }
        }
      }
      overviewButton {
        ...LinkComponentFragment
      }
      contentCollection {
        items {
          __typename
          ... on ContentBlock {
            sys {
              id
            }
          }
          ... on CardBlock {
            sys {
              id
            }
          }
          ... on Carousel {
            sys {
              id
            }
          }
        }
      }
    }
  }
`;
