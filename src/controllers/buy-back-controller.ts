import { getStaticPage } from "@/use-cases/get-static-page";
import { PAGE } from "@/utils/constants/contentful";
import services from "@/utils/services";
import { useQuery } from "@tanstack/react-query";

export class BuybackController {
  static getBuybackPageContent() {
    return useQuery({
      queryKey: ["useBuyBackPageContent"],
      queryFn: () => getStaticPage(services.cms, PAGE.BUYBACK),
    });
  }
}
