import { EntryType } from "../common";
import { CardBlockType } from "../components/card";
import { CarouselType } from "../components/carousel";
import { ContentBlockType } from "../components/content-block";
import { LinkComponentType } from "../components/link-component";

export type StaticPageResponse = {
  title: string;
  overviewText?: string;
  overviewButton?: LinkComponentType;
  content: EntryType[];
};

export type StaticPageType = {
  title: string;
  overviewText?: string;
  overviewButton?: LinkComponentType;
  content: (ContentBlockType | CardBlockType | CarouselType)[];
};
