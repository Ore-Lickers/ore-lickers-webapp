import { ImageComponentType, LinkComponentType } from "./common";

export type ContentBlockType = {
  internalTitle: string;
  title: string;
  description1: string;
  image: ImageComponentType;
  description2: string;
  link: LinkComponentType;
};
