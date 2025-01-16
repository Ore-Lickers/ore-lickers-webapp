import { ContentfulService } from "@/domain/cms/contentful-service";

export const getStaticPage = async (service: ContentfulService, id: string) => {
  return await service.getStaticPage({ id });
};
