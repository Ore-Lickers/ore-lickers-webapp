import { StaticPageType } from "@/domain/pages/static-page-type";
import { ContentfulService } from "@/domain/services/contentful-service";

export const getStaticPage = async (
  service: ContentfulService,
  page: string
): Promise<StaticPageType> => {
  return await service.getStaticPage({ page });
};
