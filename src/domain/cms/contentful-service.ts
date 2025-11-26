import { GetContentByIdParams, GetContentByPageParams } from "./common";
import { HomepageType } from "./pages/homepage";
import { StaticPageResponse } from "./pages/static-page";

export type ContentfulService = {
  getHomepage(params: GetContentByPageParams): Promise<HomepageType>;
  getStaticPage(params: GetContentByIdParams): Promise<StaticPageResponse>;
};
