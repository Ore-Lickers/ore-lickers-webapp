import { CardBlockResponse, CardBlockType } from "../components/card";
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
  cardBlock: CardBlockResponse;
};

export type HomepageType = {
  title: string;
  description: string;
  carousel?: CarouselType;
  cardBlock: CardBlockType;
};
