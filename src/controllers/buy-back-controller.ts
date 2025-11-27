import { getStaticPage } from "@/use-cases/get-static-page";
import { PAGE } from "@/utils/constants/contentful";
import services from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export class BuyBackController {
  static getBuyBackPageContent() {
    return useQuery({
      queryKey: ["useBuyBackPageContent"],
      queryFn: () => getStaticPage(services.cms, PAGE.BUY_BACK),
    });
  }
}
