import { gql } from "graphql-request";
import { LINK_COMPONENT_FRAGMENT } from "../fragments/link-component";
import { ASSET_FRAGMENT } from "../fragments/asset";
import { CONTENT_BLOCK_FRAGMENT } from "../fragments/content-block";

export const GET_STATIC_PAGE = gql`
  ${CONTENT_BLOCK_FRAGMENT}
  ${LINK_COMPONENT_FRAGMENT}
  ${ASSET_FRAGMENT}
  query GetStaticPage($page: String!) {
    staticPageCollection(where: { page: $page }, limit: 1) {
      items {
        title
        contentCollection(limit: 10) {
          items {
            ...ContentBlockFragment
          }
        }
      }
    }
  }
`;
