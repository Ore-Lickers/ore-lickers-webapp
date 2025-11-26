import { ImageResponse, ImageType } from "./asset";
import { LinkComponentType } from "./link-component";

export type ContentBlockResponse = {
  title?: string;
  description?: {
    json: Node;
  };
  image?: ImageResponse;
  link?: LinkComponentType;
};

export type ContentBlockType = {
  title?: string;
  description?: string;
  image?: ImageType;
  link?: LinkComponentType;
};
