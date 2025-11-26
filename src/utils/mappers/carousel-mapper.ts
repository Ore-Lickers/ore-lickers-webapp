import { CarouselType } from "@/domain/components/carousel-type";
import { mapCollection, mapImageResponse } from "./common-mapper";
import { ImageType } from "@/domain/components/image-type";
import { CarouselResponse } from "@/domain/response/cms/carousel-response";
import { ImageResponse } from "@/domain/response/cms/image-response";

export const mapCarouselResponse = (
  carouselResponse: CarouselResponse
): CarouselType => {
  const { title, carouselItemsCollection } = carouselResponse;
  return {
    title,
    carouselItems: mapCollection<ImageResponse, ImageType>(
      carouselItemsCollection,
      mapImageResponse
    ),
  };
};
