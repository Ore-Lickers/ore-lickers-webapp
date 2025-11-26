import { ContentBlockType } from "@/domain/components/content-block-type";
import { mapImage, mapLinkComponent, mapRichText } from "./common-mapper";
import { ContentBlockResponse } from "@/domain/response/cms/content-block-response";

export const mapContentBlock = (
  apiData: ContentBlockResponse
): ContentBlockType => {
  const { title, description, image, link } = apiData;
  return {
    title,
    image: image ? mapImage(image) : undefined,
    description: mapRichText(description),
    link: mapLinkComponent(link),
  };
};
