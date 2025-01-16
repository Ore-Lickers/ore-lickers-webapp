import { GetStaticPageParams, StaticPageType } from "./static-page";

export type ContentfulService = {
  getStaticPage(params: GetStaticPageParams): Promise<StaticPageType>;
};
