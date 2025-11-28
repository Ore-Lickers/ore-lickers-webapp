import { Collection } from "@/domain/misc/collection";
import { ImageResponse } from "./image-response";

export type CarouselResponse = {
  title?: string;
  carouselItemsCollection: Collection<ImageResponse>;
};
