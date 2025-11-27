import { CardType } from "@/domain/components/card-type";
import { CardResponse } from "@/domain/response/cms/card-response";
import { mapImageResponse } from "./image-mapper";
import { mapRichText } from "./rich-text-mapper";

export function mapCardResponse(cardResponse: CardResponse): CardType {
  const { image, title, description, link } = cardResponse;
  return {
    image: image ? mapImageResponse(image) : undefined,
    title,
    description: mapRichText(description)!,
    link,
  };
}
