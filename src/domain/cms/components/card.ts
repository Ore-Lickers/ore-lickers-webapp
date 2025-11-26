import { Collection } from "../common";
import { ImageResponse, ImageType } from "./asset";
import { LinkComponentType } from "./link-component";

export type CardBlockResponse = {
  title?: string;
  layout: "1 - 1 - 1" | "1 - 2" | "2 - 1" | "1 - 1 - 1 - 1";
  cardsCollection: Collection<CardResponse>;
};

export type CardResponse = {
  layout: "Vertical" | "Horizontal";
  image?: ImageResponse;
  title?: string;
  description: {
    json: Node;
  };
  link?: LinkComponentType;
};

export type CardBlockType = {
  title?: string;
  layout: "1 - 1 - 1" | "1 - 2" | "2 - 1" | "1 - 1 - 1 - 1";
  cards: CardType[];
};

export type CardType = {
  layout: "Vertical" | "Horizontal";
  image?: ImageType;
  title?: string;
  description: string;
  link?: LinkComponentType;
};
