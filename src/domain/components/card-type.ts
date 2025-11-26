import { ImageType } from "./image-type";
import { LinkComponentType } from "./link-component-type";

export type CardType = {
  layout: "Vertical" | "Horizontal";
  image?: ImageType;
  title?: string;
  description: string;
  link?: LinkComponentType;
};
