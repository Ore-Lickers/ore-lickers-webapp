import { Collection } from "@/domain/misc/collection";
import { HomepageResponse } from "./homepage-response";

export type HomepageCollectionResponse = {
  homepageCollection: Collection<HomepageResponse>;
};
