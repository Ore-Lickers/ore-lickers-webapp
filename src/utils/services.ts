import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!;
const env = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!;

const instance = {
  cms: new ContentfulGateway(spaceId, env, token),
};

export default instance;
