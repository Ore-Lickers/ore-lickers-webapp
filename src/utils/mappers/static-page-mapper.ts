import { StaticPageResponse } from "@/domain/cms/static-page";
import { mapRichText } from "./common-mapper";

export const mapStaticPage = (apiData: any): StaticPageResponse => {
  const { title, overviewText, overviewButton, contentCollection } =
    apiData.staticPage;
  return {
    title,
    overviewText: mapRichText(overviewText),
    overviewButton,
    content: contentCollection?.items || [],
  };
};
