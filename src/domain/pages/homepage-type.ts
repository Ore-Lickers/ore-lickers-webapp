import { CardBlockType } from "../components/card-block-type";
import { CarouselType } from "../components/carousel-type";

export type HomepageType = {
  title: string;
  description: string;
  carousel?: CarouselType;
  cardBlock: CardBlockType;
};
