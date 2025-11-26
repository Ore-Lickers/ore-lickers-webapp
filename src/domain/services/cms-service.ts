import { GetContentByPageParams } from "../misc/get-content-by-page-params";
import { HomepageType } from "../pages/homepage-type";
import { StaticPageType } from "../pages/static-page-type";

export type CmsService = {
  getHomepage(params: GetContentByPageParams): Promise<HomepageType>;
  getStaticPage(params: GetContentByPageParams): Promise<StaticPageType>;
};
