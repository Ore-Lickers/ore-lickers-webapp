import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPage } from "@/use-cases/get-static-page";
import { useQuery } from "@tanstack/react-query";

const settings = contentfulSettings[process.env.NODE_ENV];

export const HowToController = () => {
  const getHowToPageContent = async () => {
    return await getStaticPage(ContentfulGateway(), settings.howToContentId);
  };

  const useHowToPageContent = () =>
    useQuery({
      queryKey: ["useHowToPageContent"],
      queryFn: getHowToPageContent,
    });

  return {
    useHowToPageContent,
  };
};
