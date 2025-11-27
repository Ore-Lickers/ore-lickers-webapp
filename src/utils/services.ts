import { ContentfulGateway } from "@/gateways/cms/contentful-gateway";

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!;
const env = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!;

// Singletons suck in NextJS
const globalTemp = globalThis as any;
const cms = globalTemp.cms || new ContentfulGateway(spaceId, env, token);
if (process.env.NODE_ENV !== "production") globalTemp.cms = cms;

export default { cms };
