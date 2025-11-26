import {
  ContentBlockResponse,
  ContentBlockType,
} from "@/domain/cms/components/content-block";
import { mapImage, mapLinkComponent, mapRichText } from "./common-mapper";

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
