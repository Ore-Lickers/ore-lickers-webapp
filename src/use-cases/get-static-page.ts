import { ContentfulService } from "@/domain/cms/contentful-service";
import { StaticPageType } from "@/domain/cms/static-page";
import { CONTENT_TYPE } from "@/utils/constants/contentful";

export const getStaticPage = async (
  service: ContentfulService,
  id: string
): Promise<StaticPageType> => {
  const staticPageResponse = await service.getStaticPage({ id });
  const contentBlocks = [];
  for (const entry of staticPageResponse.content) {
    if (entry.__typename === CONTENT_TYPE.CONTENT_BLOCK) {
      const contentBlock = await service.getContentBlock({ id: entry.sys.id });
      contentBlocks.push(contentBlock);
    } else if (entry.__typename === CONTENT_TYPE.CARD_BLOCK) {
      const cardBlock = await service.getCardBlock({ id: entry.sys.id });
      contentBlocks.push(cardBlock);
    } else {
      throw new Error(`Content type [${entry.__typename}] not found`);
    }
  }
  return {
    ...staticPageResponse,
    content: contentBlocks,
  };
};
