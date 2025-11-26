import { Collection } from "@/domain/cms/common";
import {
  CardBlockResponse,
  CardBlockType,
  CardResponse,
  CardType,
} from "@/domain/cms/components/card";
import { mapImage } from "./common-mapper";

export function mapCardBlockResponse(
  cardBlockResponse: CardBlockResponse
): CardBlockType {
  const { title, layout, cardsCollection } = cardBlockResponse;
  return {
    title,
    layout,
    cards: mapCardCollection(cardsCollection),
  };
}

export function mapCardCollection(
  cardsCollection: Collection<CardResponse>
): CardType[] {
  const cards = cardsCollection?.items || [];
  const mappedCards: CardType[] = [];
  for (const card of cards) {
    const mappedCard = mapCard(card);
    mappedCards.push(mappedCard);
  }
  return mappedCards;
}

export function mapCard(card: CardResponse): CardType {
  const { layout, image, title, description, link } = card;
  return {
    layout,
    image: image ? mapImage(image) : undefined,
    title,
    description,
    link,
  };
}
