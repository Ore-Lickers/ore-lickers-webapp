import {
  CardBlockType,
  CardType,
  ContentBlockType,
} from "@/domain/cms/content";
import {
  mapImageComponent,
  mapLinkComponent,
  mapRichText,
} from "./common-mapper";

export const mapContentBlock = (apiData: any): ContentBlockType => {
  const { __typename, title, description1, image, description2, link } =
    apiData.contentBlock;

  return {
    __typename,
    title,
    image: mapImageComponent(image),
    description1: mapRichText(description1),
    description2: mapRichText(description2),
    link: mapLinkComponent(link),
  };
};

export const mapCardBlock = (apiData: any): CardBlockType => {
  const { __typename, title, layout, cardsCollection } = apiData.cardBlock;
  const cards = cardsCollection?.items || [];
  return {
    __typename,
    title,
    layout,
    cards: mapCards(cards),
  };
};

export const mapCards = (cards: any): CardType[] => {
  const mappedCards: CardType[] = [];
  for (const card of cards) {
    const mappedCard = mapCard(card);
    mappedCards.push(mappedCard);
  }
  return mappedCards;
};

export const mapCard = (card: any): CardType => {
  const { title, description, link, image } = card;
  return {
    image: mapImageComponent(image),
    title,
    description: mapRichText(description)!,
    link: mapLinkComponent(link),
  };
};
