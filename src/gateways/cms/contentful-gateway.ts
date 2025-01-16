import { ContentfulService } from "@/domain/cms/contentful-service";
import { GetStaticPageParams, StaticPageType } from "@/domain/cms/static-page";
import { GET_STATIC_PAGE } from "@/graphql/queries/static-page";
import { mapStaticPage } from "@/utils/mappers/static-page-mapper";
import { GraphQLClient } from "graphql-request";

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const env = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${env}`;

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

const ContentfulGateway = (): ContentfulService => {
  const getStaticPage = async ({
    id,
  }: GetStaticPageParams): Promise<StaticPageType> => {
    const params = {
      id,
    };

    const response = await client.request<any>(GET_STATIC_PAGE, params);
    return mapStaticPage(response);
  };

  return {
    getStaticPage,
  };
};

export { ContentfulGateway };
