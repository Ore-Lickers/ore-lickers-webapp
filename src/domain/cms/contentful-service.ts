import { GetContentByPageParams } from "./common";
import { HomepageType } from "./pages/homepage";
import { StaticPageType } from "./pages/static-page";

export type ContentfulService = {
  getHomepage(params: GetContentByPageParams): Promise<HomepageType>;
  getStaticPage(params: GetContentByPageParams): Promise<StaticPageType>;
};
