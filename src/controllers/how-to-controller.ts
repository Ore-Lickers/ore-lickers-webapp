import { contentfulSettings } from "@/settings/contentful-settings";
import { getStaticPage } from "@/use-cases/get-static-page";
import instance from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

const settings = contentfulSettings[process.env.NODE_ENV];

export class HowToController {
  static getHowToPageContent() {
    return useQuery({
      queryKey: ["useHowToPageContent"],
      queryFn: () => getStaticPage(instance.cms, settings.howToContentId),
    });
  }
}
