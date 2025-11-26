import { Collection } from "@/domain/misc/collection";
import { StaticPageResponse } from "./static-page-response";

export type StaticPageCollectionResponse = {
  staticPageCollection: Collection<StaticPageResponse>;
};
