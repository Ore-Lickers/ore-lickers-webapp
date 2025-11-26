import { getStaticPage } from "@/use-cases/get-static-page";
import { PAGE } from "@/utils/constants/contentful";
import instance from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export class BuyBackController {
  static getBuyBackPageContent() {
    return useQuery({
      queryKey: ["useBuyBackPageContent"],
      queryFn: () => getStaticPage(instance.cms, PAGE.BUY_BACK),
    });
  }
}
