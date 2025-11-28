import { getHomepage } from "@/use-cases/get-homepage";
import { PAGE } from "@/utils/constants/contentful";
import services from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export class HomeController {
  static getHomepageContent() {
    return useQuery({
      queryKey: ["homePageContent"],
      queryFn: () => getHomepage(services.cms, PAGE.HOMEPAGE),
    });
  }
}
