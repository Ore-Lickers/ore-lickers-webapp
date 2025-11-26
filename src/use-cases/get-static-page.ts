import { ContentfulService } from "@/domain/cms/contentful-service";
import { StaticPageType } from "@/domain/cms/pages/static-page";

export const getStaticPage = async (
  service: ContentfulService,
  page: string
): Promise<StaticPageType> => {
  return await service.getStaticPage({ page });
};
