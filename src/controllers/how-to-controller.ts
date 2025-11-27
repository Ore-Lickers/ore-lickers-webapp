import { getStaticPage } from "@/use-cases/get-static-page";
import { PAGE } from "@/utils/constants/contentful";
import services from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export class HowToController {
  static getHowToPageContent() {
    return useQuery({
      queryKey: ["useHowToPageContent"],
      queryFn: () => getStaticPage(services.cms, PAGE.HOW_TO),
    });
  }
}
