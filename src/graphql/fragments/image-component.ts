import { gql } from "graphql-request";

export const IMAGE_COMPONENT_FRAGMENT = gql`
  fragment ImageComponentFragment on ImageComponent {
    title
    altText
    desktop {
      url
      height
      width
    }
    mobile {
      url
      height
      width
    }
    url
  }
`;
