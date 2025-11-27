import { CardBlockResponse } from "./card-block-response";
import { CarouselResponse } from "./carousel-response";

export type HomepageResponse = {
  title: string;
  description: {
    json: Node;
  };
  carousel?: CarouselResponse;
  cardBlock: CardBlockResponse;
};
