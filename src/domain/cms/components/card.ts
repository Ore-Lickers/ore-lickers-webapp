import { ImageComponentType } from "./image-component";
import { LinkComponentType } from "./link-component";

export type CardBlockResponse = {
  __typename: string;
  title?: string;
  layout: "1 - 1 - 1" | "1 - 2" | "2 - 1" | "1 - 1 - 1 - 1";
  cardsCollection: {
    items: CardType[];
  };
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
