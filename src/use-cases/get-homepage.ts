import { HomepageType } from "@/domain/pages/homepage-type";
import { ContentfulService } from "@/domain/services/contentful-service";

export const getHomepage = async (
  service: ContentfulService,
  page: string
): Promise<HomepageType> => {
  return await service.getHomepage({ page });
};
