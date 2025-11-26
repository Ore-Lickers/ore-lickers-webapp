import {
  CarouselResponse,
  CarouselType,
} from "@/domain/cms/components/carousel";
import { mapImages } from "./common-mapper";

export const mapCarouselResponse = (
  carouselResponse: CarouselResponse | undefined
): CarouselType | undefined => {
  if (!carouselResponse) {
    return undefined;
  }

  const { title, carouselItemsCollection } = carouselResponse;
  return {
    title,
    carouselItems: mapImages(carouselItemsCollection),
  };
};
