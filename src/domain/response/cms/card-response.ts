import { LinkComponentType } from "@/domain/components/link-component-type";
import { ImageResponse } from "./image-response";

export type CardResponse = {
  layout: "Vertical" | "Horizontal";
  image?: ImageResponse;
  title?: string;
  description: {
    json: Node;
  };
  link?: LinkComponentType;
};
