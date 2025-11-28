import { Collection } from "@/domain/misc/collection";
import { CardResponse } from "./card-response";

export type CardBlockResponse = {
  title?: string;
  layout: "1 - 1 - 1" | "1 - 2" | "2 - 1" | "1 - 1 - 1 - 1";
  cardsCollection: Collection<CardResponse>;
};
