import { gql } from "graphql-request";
import { CAROUSEL_FRAGMENT } from "../fragments/carousel";
import { CARD_BLOCK_FRAGMENT } from "../fragments/card-block";
import { CARD_FRAGMENT } from "../fragments/card";
import { LINK_COMPONENT_FRAGMENT } from "../fragments/link-component";
import { ASSET_FRAGMENT } from "../fragments/asset";

export const GET_HOMEPAGE = gql`
  ${CAROUSEL_FRAGMENT}
  ${ASSET_FRAGMENT}
  ${CARD_BLOCK_FRAGMENT}
  ${CARD_FRAGMENT}
  ${LINK_COMPONENT_FRAGMENT}
  query GetHomepage($page: String!) {
    homepageCollection(where: { page: $page }, limit: 1) {
      items {
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
        carousel {
          ...CarouselFragment
        }
        cardBlock {
          ...CardBlockFragment
        }
      }
    }
  }
`;
