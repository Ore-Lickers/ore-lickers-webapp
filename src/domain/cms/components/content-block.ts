import { ImageComponentType } from "./image-component";
import { LinkComponentType } from "./link-component";

export type ContentBlockType = {
  __typename: string;
  title?: string;
  description1?: string;
  image?: ImageComponentType;
  description2?: string;
  link?: LinkComponentType;
};
