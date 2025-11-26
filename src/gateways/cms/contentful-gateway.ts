import { GetContentByPageParams } from "@/domain/misc/get-content-by-page-params";
import { HomepageType } from "@/domain/pages/homepage-type";
import { StaticPageType } from "@/domain/pages/static-page-type";
import { HomepageCollectionResponse } from "@/domain/response/cms/homepage-collection-response";
import { StaticPageCollectionResponse } from "@/domain/response/cms/static-page-collection-response";
import { CmsService } from "@/domain/services/cms-service";
import { GET_HOMEPAGE } from "@/graphql/queries/homepage";
import { GET_STATIC_PAGE } from "@/graphql/queries/static-page";
import { mapHomepageCollectionResponse } from "@/utils/mappers/homepage-mapper";
import { mapStaticPage } from "@/utils/mappers/static-page-mapper";
import { GraphQLClient } from "graphql-request";

export class ContentfulGateway implements CmsService {
  private readonly client: GraphQLClient;

  constructor(spaceId: string, env: string, token: string) {
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${env}`;
    this.client = new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async getHomepage({ page }: GetContentByPageParams): Promise<HomepageType> {
    const response = await this.client.request<HomepageCollectionResponse>(
      GET_HOMEPAGE,
      {
        page,
      }
    );
    return mapHomepageCollectionResponse(response);
  }

  async getStaticPage({
    page,
  }: GetContentByPageParams): Promise<StaticPageType> {
    const response = await this.client.request<StaticPageCollectionResponse>(
      GET_STATIC_PAGE,
      {
        page,
      }
    );
    return mapStaticPage(response);
  }
}
