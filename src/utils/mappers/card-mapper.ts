import { CardType } from "@/domain/components/card-type";
import { mapCollection, mapImage, mapRichText } from "./common-mapper";
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
    cards: mapCollection<CardResponse, CardType>(cardsCollection, mapCard),
  };
}

export function mapCard(card: CardResponse): CardType {
  const { layout, image, title, description, link } = card;
  return {
    layout,
    image: image ? mapImage(image) : undefined,
    title,
    description: mapRichText(description)!,
    link,
  };
}
