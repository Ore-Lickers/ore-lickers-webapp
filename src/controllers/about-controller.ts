import { getStaticPage } from "@/use-cases/get-static-page";
import { PAGE } from "@/utils/constants/contentful";
import instance from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export class AboutController {
  static getAboutPageContent() {
    return useQuery({
      queryKey: ["useAboutPageContent"],
      queryFn: () => getStaticPage(instance.cms, PAGE.ABOUT_US),
    });
  }
}
