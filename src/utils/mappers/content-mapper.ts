import { ContentBlockType } from "@/domain/cms/content";
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
