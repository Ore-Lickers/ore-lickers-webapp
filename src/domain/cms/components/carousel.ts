import { ImageComponentType } from "./image-component";

export type CarouselResponse = {
  __typename: string;
  title?: string;
  carouselItemsCollection: {
    items: ImageComponentType[];
  };
};

export type CarouselType = {
  __typename: string;
  title?: string;
  carouselItems: ImageComponentType[];
};
