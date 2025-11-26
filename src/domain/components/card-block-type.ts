import { CardType } from "./card-type";

export type CardBlockType = {
  title?: string;
  layout: "1 - 1 - 1" | "1 - 2" | "2 - 1" | "1 - 1 - 1 - 1";
  cards: CardType[];
};
