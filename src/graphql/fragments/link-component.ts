import { gql } from "@apollo/client";

export const LINK_COMPONENT_FRAGMENT = gql`
  fragment LinkComponentFragment on LinkComponent {
    linkType
    linkText
    redirectUrl
  }
`;
