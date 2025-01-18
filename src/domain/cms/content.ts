import { ImageComponentType, LinkComponentType } from "./common";

export type GetContentByIdParams = {
  id: string;
  locale?: string;
  preview?: boolean;
};

export type ContentBlockType = {
  __typename: string;
  title?: string;
  description1?: string;
  image?: ImageComponentType;
  description2?: string;
  link?: LinkComponentType;
};
