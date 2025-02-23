import { gql } from "graphql-request";
import { IMAGE_COMPONENT_FRAGMENT } from "../fragments/image-component";

export const GET_CAROUSEL = gql`
  ${IMAGE_COMPONENT_FRAGMENT}
  query GetCarousel($id: String!) {
    carousel(id: $id) {
      __typename
      title
      carouselItemsCollection {
        items {
          ...ImageComponentFragment
        }
      }
    }
  }
`;
