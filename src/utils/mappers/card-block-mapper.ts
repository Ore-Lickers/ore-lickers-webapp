import { CardBlockType } from "@/domain/components/card-block-type";
import { CardType } from "@/domain/components/card-type";
import { CardBlockResponse } from "@/domain/response/cms/card-block-response";
import { CardResponse } from "@/domain/response/cms/card-response";
import { mapCardResponse } from "./card-mapper";
import { mapCollection } from "./collection-mapper";

export function mapCardBlockResponse(
  cardBlockResponse: CardBlockResponse
): CardBlockType {
  const { title, layout, cardsCollection } = cardBlockResponse;
  return {
    title,
    layout,
    cards: mapCollection<CardResponse, CardType>(
      cardsCollection,
      mapCardResponse
    ),
  };
}
