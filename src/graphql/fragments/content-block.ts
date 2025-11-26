import { gql } from "graphql-request";

export const CONTENT_BLOCK_FRAGMENT = gql`
  fragment ContentBlockFragment on ContentBlock {
    title
    description {
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
      ...AssetFragment
    }
    link {
      ...LinkComponentFragment
    }
  }
`;
