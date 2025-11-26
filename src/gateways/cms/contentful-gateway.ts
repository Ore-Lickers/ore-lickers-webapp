import { GetContentByPageParams } from "@/domain/cms/common";
import { ContentfulService } from "@/domain/cms/contentful-service";
import {
  HomepageCollectionResponse,
  HomepageType,
} from "@/domain/cms/pages/homepage";
import {
  StaticPageCollectionResponse,
  StaticPageType,
} from "@/domain/cms/pages/static-page";
import { GET_HOMEPAGE } from "@/graphql/queries/homepage";
import { GET_STATIC_PAGE } from "@/graphql/queries/static-page";
import { mapHomepageCollectionResponse } from "@/utils/mappers/homepage-mapper";
import { mapStaticPage } from "@/utils/mappers/static-page-mapper";
import { GraphQLClient } from "graphql-request";

export class ContentfulGateway implements ContentfulService {
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
