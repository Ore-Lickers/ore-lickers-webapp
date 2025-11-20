import {
  CardBlockType,
  CarouselType,
  ContentBlockType,
  GetContentByIdParams,
} from "@/domain/cms/content";
import { ContentfulService } from "@/domain/cms/contentful-service";
import { StaticPageResponse } from "@/domain/cms/static-page";
import { GET_CARD_BLOCK } from "@/graphql/queries/card-block";
import { GET_CAROUSEL } from "@/graphql/queries/carousel";
import { GET_CONTENT_BLOCK } from "@/graphql/queries/content-block";
import { GET_STATIC_PAGE } from "@/graphql/queries/static-page";
import {
  mapCardBlock,
  mapCarousel,
  mapContentBlock,
} from "@/utils/mappers/content-mapper";
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
