import { ContentfulService } from "@/domain/cms/contentful-service";
import { GetStaticPageParams, StaticPageType } from "@/domain/cms/static-page";
import { GET_STATIC_PAGE } from "@/graphql/queries/static-page";
import { mapStaticPage } from "@/utils/mappers/static-page-mapper";
import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = () => {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const env = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

  return createHttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${env}`,
  });
};

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!;
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

const headerLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "Content-Type": "application/json",
  },
}));

const client = new ApolloClient({
  link: from([authLink, headerLink, httpLink()]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

const ContentfulGateway = (): ContentfulService => {
  const getStaticPage = async ({
    id,
  }: GetStaticPageParams): Promise<StaticPageType> => {
    const params = {
      id,
    };

    const response = await client.query<any>({
      query: GET_STATIC_PAGE,
      variables: params,
    });

    return mapStaticPage(response.data);
  };

  return {
    getStaticPage,
  };
};

export { ContentfulGateway };
