import { HomepageType } from "@/domain/pages/homepage-type";
import { CmsService } from "@/domain/services/cms-service";

export const getHomepage = async (
  service: CmsService,
  page: string
): Promise<HomepageType> => {
  return await service.getHomepage({ page });
};
