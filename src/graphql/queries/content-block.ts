import { gql } from "graphql-request";
import { IMAGE_COMPONENT_FRAGMENT } from "../fragments/image-component";
import { LINK_COMPONENT_FRAGMENT } from "../fragments/link-component";
import { ASSET_FRAGMENT } from "../fragments/asset";

export const GET_CONTENT_BLOCK = gql`
  ${IMAGE_COMPONENT_FRAGMENT}
  ${LINK_COMPONENT_FRAGMENT}
  ${ASSET_FRAGMENT}
  query GetContentBlock($id: String!) {
    contentBlock(id: $id) {
      __typename
      title
      description1 {
        json
        links {
          assets {
            block {
              ...AssetFragment
            }
          }
        }
      }
      image {
        ...ImageComponentFragment
      }
      description2 {
        json
        links {
          assets {
            block {
              ...AssetFragment
            }
          }
        }
      }
      link {
        ...LinkComponentFragment
      }
    }
  }
`;
