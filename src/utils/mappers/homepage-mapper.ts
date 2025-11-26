import { mapRichText } from "./common-mapper";
import { mapCarouselResponse } from "./carousel-mapper";
import { mapCardBlockResponse } from "./card-mapper";
import { HomepageType } from "@/domain/pages/homepage-type";
import { HomepageCollectionResponse } from "@/domain/response/cms/homepage-collection-response";

export const mapHomepageCollectionResponse = (
  homepageCollectionResponse: HomepageCollectionResponse
): HomepageType => {
  const items = homepageCollectionResponse?.homepageCollection?.items || [];
  const { title, description, carousel, cardBlock } = items[0];
  return {
    title,
    description: mapRichText(description)!,
    carousel: carousel ? mapCarouselResponse(carousel) : undefined,
    cardBlock: mapCardBlockResponse(cardBlock),
  };
};
