import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPage } from "@/use-cases/get-static-page";
import instance from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

const settings = contentfulSettings[process.env.NODE_ENV];

export class BuyBackController {
  static getBuyBackPageContent() {
    return useQuery({
      queryKey: ["useBuyBackPageContent"],
      queryFn: () => getStaticPage(instance.cms, settings.buyBackContentId),
    });
  }
}
