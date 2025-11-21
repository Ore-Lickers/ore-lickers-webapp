import { mapRichText } from "./common-mapper";
import {
  HomepageCollectionResponse,
  HomepageType,
} from "@/domain/cms/pages/homepage";
import { mapCarouselResponse } from "./carousel-mapper";
import { mapCardBlockResponse } from "./card-mapper";

export const mapHomepage = (
  apiData: HomepageCollectionResponse
): HomepageType => {
  const items = apiData?.homepageCollection?.items || [];
  const { title, description, carousel, cardBlock } = items[0];
  console.log(cardBlock);

  return {
    title,
    description: mapRichText(description)!,
    carousel: mapCarouselResponse(carousel),
    cardBlock: mapCardBlockResponse(cardBlock),
  };
};
