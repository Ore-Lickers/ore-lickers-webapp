import { ContentfulService } from "@/domain/cms/contentful-service";
import { HomepageType } from "@/domain/cms/pages/homepage";

export const getHomepage = async (
  service: ContentfulService,
  page: string
): Promise<HomepageType> => {
  return await service.getHomepage({ page });
};
