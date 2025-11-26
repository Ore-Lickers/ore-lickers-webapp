import { LinkComponentType } from "@/domain/components/link-component-type";
import { ImageResponse } from "./image-response";

export type ContentBlockResponse = {
  title?: string;
  description?: {
    json: Node;
  };
  image?: ImageResponse;
  link?: LinkComponentType;
};
