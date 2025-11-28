import { StaticPageType } from "@/domain/pages/static-page-type";
import { CmsService } from "@/domain/services/cms-service";

export const getStaticPage = async (
  service: CmsService,
  page: string
): Promise<StaticPageType> => {
  return await service.getStaticPage({ page });
};
