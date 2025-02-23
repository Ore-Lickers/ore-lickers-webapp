import { EntryType, LinkComponentType } from "./common";
import { CardBlockType, CarouselType, ContentBlockType } from "./content";

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
