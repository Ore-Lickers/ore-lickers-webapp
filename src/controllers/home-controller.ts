import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPageContent } from "@/use-cases/get-static-page-content";
import { useQuery } from "@tanstack/react-query";

const settings = contentfulSettings[process.env.NODE_ENV];

export const HomeController = () => {
  const getHomePageContent = async () => {
    return await getStaticPageContent(
      ContentfulGateway(),
      settings.homePageContentId
    );
  };

  const useHomePageContent = () =>
    useQuery({
      queryKey: ["homePageContent"],
      queryFn: getHomePageContent,
    });

  return {
    useHomePageContent,
  };
};
