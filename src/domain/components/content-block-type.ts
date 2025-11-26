import { ImageType } from "./image-type";
import { LinkComponentType } from "./link-component-type";

export type ContentBlockType = {
  title?: string;
  description?: string;
  image?: ImageType;
  link?: LinkComponentType;
};
