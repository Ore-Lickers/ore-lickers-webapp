import { getStaticPage } from "@/use-cases/get-static-page";
import { PAGE } from "@/utils/constants/contentful";
import instance from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export class RecruitmentController {
  static getRecruitmentPageContent() {
    return useQuery({
      queryKey: ["useRecruitmentPageContent"],
      queryFn: () => getStaticPage(instance.cms, PAGE.RECRUITMENT),
    });
  }
}
