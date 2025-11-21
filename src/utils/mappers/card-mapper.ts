import { CardBlockResponse, CardBlockType } from "@/domain/cms/components/card";

export function mapCardBlockResponse(
  cardBlockResponse: CardBlockResponse
): CardBlockType {
  const { __typename, title, layout, cardsCollection } = cardBlockResponse;
  const items = cardsCollection?.items || [];
  return {
    __typename,
    title,
    layout,
    cards: items,
  };
}
