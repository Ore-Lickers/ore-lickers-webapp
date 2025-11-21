import {
  GetContentByIdParams,
  GetContentByPageParams,
} from "@/domain/cms/common";
import { CardBlockType } from "@/domain/cms/components/card";
import { CarouselType } from "@/domain/cms/components/carousel";
import { ContentBlockType } from "@/domain/cms/components/content-block";
import { ContentfulService } from "@/domain/cms/contentful-service";
import {
  HomepageCollectionResponse,
  HomepageType,
} from "@/domain/cms/pages/homepage";
import { StaticPageResponse } from "@/domain/cms/pages/static-page";
import { GET_CARD_BLOCK } from "@/graphql/queries/card-block";
import { GET_CAROUSEL } from "@/graphql/queries/carousel";
import { GET_CONTENT_BLOCK } from "@/graphql/queries/content-block";
import { GET_HOMEPAGE } from "@/graphql/queries/homepage";
import { GET_STATIC_PAGE } from "@/graphql/queries/static-page";
import {
  mapCardBlock,
  mapCarousel,
  mapContentBlock,
} from "@/utils/mappers/content-mapper";
import { mapHomepage } from "@/utils/mappers/homepage-mapper";
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
    return mapHomepage(response);
  }

  async getStaticPage({
    id,
  }: GetContentByIdParams): Promise<StaticPageResponse> {
    const response = await this.client.request<any>(GET_STATIC_PAGE, {
      id,
    });
    return mapStaticPage(response);
  }

  async getContentBlock({
    id,
  }: GetContentByIdParams): Promise<ContentBlockType> {
    const response = await this.client.request<any>(GET_CONTENT_BLOCK, {
      id,
    });
    return mapContentBlock(response);
  }

  async getCardBlock({ id }: GetContentByIdParams): Promise<CardBlockType> {
    const response = await this.client.request<any>(GET_CARD_BLOCK, {
      id,
    });
    return mapCardBlock(response);
  }

  async getCarousel({ id }: GetContentByIdParams): Promise<CarouselType> {
    const response = await this.client.request<any>(GET_CAROUSEL, {
      id,
    });
    return mapCarousel(response);
  }
}
