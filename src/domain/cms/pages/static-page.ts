import { Collection } from "../common";
import {
  ContentBlockResponse,
  ContentBlockType,
} from "../components/content-block";

export type StaticPageCollectionResponse = {
  staticPageCollection: Collection<StaticPageResponse>;
};

export type StaticPageResponse = {
  title: string;
  contentCollection: Collection<ContentBlockResponse>;
};

export type StaticPageType = {
  title: string;
  content: ContentBlockType[];
};
