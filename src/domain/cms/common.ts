export type EntryType = {
  _id: string;
  __typename: string;
};

export type ImageComponentType = {
  internalTitle: string;
  title: string;
  altText: string;
  desktop: ContentfulImage;
  mobile?: ContentfulImage;
  url?: string;
};

export type ContentfulImage = {};

export type LinkComponentType = {
  internalTitle: string;
  linkType: "Button" | "Hyperlink";
  linkText: string;
  redirectUrl: string;
};
