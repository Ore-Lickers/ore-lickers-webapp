import {
  CarouselResponse,
  CarouselType,
} from "@/domain/cms/components/carousel";
import { mapImageComponents } from "./common-mapper";

export const mapCarouselResponse = (
  carouselResponse: CarouselResponse | undefined
): CarouselType => {
  const { __typename, title, carouselItemsCollection } = carouselResponse || {};
  const carouselItems = carouselItemsCollection?.items || [];
  return {
    __typename: __typename || "Carousel",
    title,
    carouselItems: mapImageComponents(carouselItems),
  };
};
