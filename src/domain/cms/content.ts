import { ImageComponentType, LinkComponentType } from "./common";

export type GetContentByIdParams = {
  id: string;
  locale?: string;
  preview?: boolean;
};

export type ContentBlockType = {
  __typename: string;
  title?: string;
  description1?: string;
  image?: ImageComponentType;
  description2?: string;
  link?: LinkComponentType;
};

export type CardBlockType = {
  __typename: string;
  title?: string;
  layout: "1 - 1 - 1" | "1 - 2" | "2 - 1" | "1 - 1 - 1 - 1";
  cards: CardType[];
};

export type CardType = {
  layout: "Vertical" | "Horizontal";
  image?: ImageComponentType;
  title?: string;
  description: string;
  link?: LinkComponentType;
};

export type CarouselType = {
  __typename: string;
  title?: string;
  carouselItems: ImageComponentType[];
};
