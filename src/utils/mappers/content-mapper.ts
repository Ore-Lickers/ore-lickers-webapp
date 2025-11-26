import { ContentBlockType } from "@/domain/components/content-block-type";
import { mapImageResponse, mapRichText } from "./common-mapper";
import { ContentBlockResponse } from "@/domain/response/cms/content-block-response";

export const mapContentBlock = (
  contentBlockResponse: ContentBlockResponse
): ContentBlockType => {
  const { title, description, image, link } = contentBlockResponse;
  return {
    title,
    image: image ? mapImageResponse(image) : undefined,
    description: mapRichText(description),
    link,
  };
};
