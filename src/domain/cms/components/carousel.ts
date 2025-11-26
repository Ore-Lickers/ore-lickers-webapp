import { Collection } from "../common";
import { ImageResponse, ImageType } from "./asset";

export type CarouselResponse = {
  title?: string;
  carouselItemsCollection: Collection<ImageResponse>;
};

export type CarouselType = {
  title?: string;
  carouselItems: ImageType[];
};
