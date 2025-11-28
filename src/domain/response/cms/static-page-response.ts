import { Collection } from "@/domain/misc/collection";
import { ContentBlockResponse } from "./content-block-response";

export type StaticPageResponse = {
  title: string;
  contentCollection: Collection<ContentBlockResponse>;
};
