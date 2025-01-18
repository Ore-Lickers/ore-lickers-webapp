import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPage } from "@/use-cases/get-static-page";
import { useQuery } from "@tanstack/react-query";

const settings = contentfulSettings[process.env.NODE_ENV];

export const HomeController = () => {
  const getHomePageContent = async () => {
    return await getStaticPage(ContentfulGateway(), settings.homePageContentId);
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
