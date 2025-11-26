import {
  CardBlockResponse,
  CardBlockType,
  CardResponse,
  CardType,
} from "@/domain/cms/components/card";
import { mapCollection, mapImage, mapRichText } from "./common-mapper";

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
