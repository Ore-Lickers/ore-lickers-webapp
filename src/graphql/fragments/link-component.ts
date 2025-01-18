import { gql } from "graphql-request";

export const LINK_COMPONENT_FRAGMENT = gql`
  fragment LinkComponentFragment on LinkComponent {
    linkType
    linkText
    redirectUrl
  }
`;
