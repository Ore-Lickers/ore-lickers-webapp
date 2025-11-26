import {
  StaticPageCollectionResponse,
  StaticPageType,
} from "@/domain/cms/pages/static-page";
import { mapCollection } from "./common-mapper";
import {
  ContentBlockResponse,
  ContentBlockType,
} from "@/domain/cms/components/content-block";
import { mapContentBlock } from "./content-mapper";

export const mapStaticPage = (
  apiData: StaticPageCollectionResponse
): StaticPageType => {
  const items = apiData?.staticPageCollection?.items || [];
  const { title, contentCollection } = items[0];
  return {
    title,
    content: mapCollection<ContentBlockResponse, ContentBlockType>(
      contentCollection,
      mapContentBlock
    ),
  };
};
