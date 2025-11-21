import { CardBlockType } from "../components/card";
import { CarouselResponse, CarouselType } from "../components/carousel";

export type HomepageCollectionResponse = {
  homepageCollection: {
    items: HomepageResponse[];
  };
};

export type HomepageResponse = {
  title: string;
  description: {
    json: Node;
  };
  carousel?: CarouselResponse;
  cardBlock: CardBlockType;
};

export type HomepageType = {
  title: string;
  description: string;
  carousel?: CarouselType;
  cardBlock: CardBlockType;
};
