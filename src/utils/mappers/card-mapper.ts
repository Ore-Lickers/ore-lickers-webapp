import { CardType } from "@/domain/components/card-type";
import { mapCollection, mapImageResponse, mapRichText } from "./common-mapper";
import { CardBlockType } from "@/domain/components/card-block-type";
import { CardBlockResponse } from "@/domain/response/cms/card-block-response";
import { CardResponse } from "@/domain/response/cms/card-response";

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

export function mapCardResponse(cardResponse: CardResponse): CardType {
  const { layout, image, title, description, link } = cardResponse;
  return {
    layout,
    image: image ? mapImageResponse(image) : undefined,
    title,
    description: mapRichText(description)!,
    link,
  };
}
