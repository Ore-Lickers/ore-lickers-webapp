import { gql } from "graphql-request";

export const CAROUSEL_FRAGMENT = gql`
  fragment CarouselFragment on Carousel {
    title
    carouselItemsCollection(limit: 5) {
      items {
        ...ImageComponentFragment
      }
    }
  }
`;
