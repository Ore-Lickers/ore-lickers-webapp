import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";
import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPage } from "@/use-cases/get-static-page";
import { useQuery } from "@tanstack/react-query";

const settings = contentfulSettings[process.env.NODE_ENV];

export const BuyBackController = () => {
  const getBuyBackPageContent = async () => {
    return await getStaticPage(ContentfulGateway(), settings.buyBackContentId);
  };

  const useBuyBackPageContent = () =>
    useQuery({
      queryKey: ["useBuyBackPageContent"],
      queryFn: getBuyBackPageContent,
    });

  return {
    useBuyBackPageContent,
  };
};
