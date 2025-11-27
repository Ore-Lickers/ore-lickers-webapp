import { ContentBlockType } from "@/domain/components/content-block-type";
import { ContentBlockResponse } from "@/domain/response/cms/content-block-response";
import { mapImageResponse } from "./image-mapper";
import { mapRichText } from "./rich-text-mapper";

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
