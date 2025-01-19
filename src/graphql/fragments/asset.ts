import { gql } from "graphql-request";

export const ASSET_FRAGMENT = gql`
  fragment AssetFragment on Asset {
    sys {
      id
    }
    title
    url
    width
    height
  }
`;
