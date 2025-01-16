import { EntryType, LinkComponentType } from "./common";

export type StaticPageType = {
  title: string;
  overviewText?: string;
  overviewButton?: LinkComponentType;
  content: EntryType[];
};

export type GetStaticPageParams = {
  id: string;
};
