import { LinkComponentType } from "@/domain/components/link-component-type";
import { ImageResponse } from "./image-response";

export type CardResponse = {
  image?: ImageResponse;
  title?: string;
  description: {
    json: Node;
  };
  link?: LinkComponentType;
};
