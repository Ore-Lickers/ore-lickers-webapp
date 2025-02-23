import {
  CardBlockType,
  CarouselType,
  ContentBlockType,
  GetContentByIdParams,
} from "./content";
import { StaticPageResponse } from "./static-page";

export type ContentfulService = {
  getStaticPage(params: GetContentByIdParams): Promise<StaticPageResponse>;
  getContentBlock(params: GetContentByIdParams): Promise<ContentBlockType>;
  getCardBlock(params: GetContentByIdParams): Promise<CardBlockType>;
  getCarousel(params: GetContentByIdParams): Promise<CarouselType>;
};
