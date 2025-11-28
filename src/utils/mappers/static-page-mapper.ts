import { mapCollection } from "./collection-mapper";
import { ContentBlockType } from "@/domain/components/content-block-type";
import { mapContentBlock } from "./content-mapper";
import { StaticPageType } from "@/domain/pages/static-page-type";
import { ContentBlockResponse } from "@/domain/response/cms/content-block-response";
import { StaticPageCollectionResponse } from "@/domain/response/cms/static-page-collection-response";

export const mapStaticPageCollectionResponse = (
  staticPageCollectionResponse: StaticPageCollectionResponse
): StaticPageType => {
  const items = staticPageCollectionResponse?.staticPageCollection?.items || [];
  const { title, contentCollection } = items[0];
  return {
    title,
    content: mapCollection<ContentBlockResponse, ContentBlockType>(
      contentCollection,
      mapContentBlock
    ),
  };
};
