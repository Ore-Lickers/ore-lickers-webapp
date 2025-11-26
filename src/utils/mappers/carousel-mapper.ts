import {
  CarouselResponse,
  CarouselType,
} from "@/domain/cms/components/carousel";
import { mapCollection, mapImage } from "./common-mapper";
import { ImageResponse, ImageType } from "@/domain/cms/components/asset";

export const mapCarouselResponse = (
  carouselResponse: CarouselResponse
): CarouselType => {
  const { title, carouselItemsCollection } = carouselResponse;
  return {
    title,
    carouselItems: mapCollection<ImageResponse, ImageType>(
      carouselItemsCollection,
      mapImage
    ),
  };
};
