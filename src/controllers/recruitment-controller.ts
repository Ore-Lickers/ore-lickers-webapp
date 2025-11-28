import { getStaticPage } from "@/use-cases/get-static-page";
import { PAGE } from "@/utils/constants/contentful";
import services from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export class RecruitmentController {
  static getRecruitmentPageContent() {
    return useQuery({
      queryKey: ["useRecruitmentPageContent"],
      queryFn: () => getStaticPage(services.cms, PAGE.RECRUITMENT),
    });
  }
}
