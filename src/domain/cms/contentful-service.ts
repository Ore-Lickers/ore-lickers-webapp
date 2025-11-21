import { GetContentByIdParams, GetContentByPageParams } from "./common";
import { CardBlockType } from "./components/card";
import { CarouselType } from "./components/carousel";
import { ContentBlockType } from "./components/content-block";
import { HomepageType } from "./pages/homepage";
import { StaticPageResponse } from "./pages/static-page";

export type ContentfulService = {
  getHomepage(params: GetContentByPageParams): Promise<HomepageType>;
  getStaticPage(params: GetContentByIdParams): Promise<StaticPageResponse>;
  getContentBlock(params: GetContentByIdParams): Promise<ContentBlockType>;
  getCardBlock(params: GetContentByIdParams): Promise<CardBlockType>;
  getCarousel(params: GetContentByIdParams): Promise<CarouselType>;
};
