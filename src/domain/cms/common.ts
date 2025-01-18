export type EntryType = {
  sys: {
    id: string;
  };
  __typename: string;
};

export type ImageComponentType = {
  title: string;
  altText: string;
  desktop: ContentfulImage;
  mobile?: ContentfulImage;
  url?: string;
};

export type ContentfulImage = {
  url: string;
};

export type LinkComponentType = {
  linkType: "Button" | "Hyperlink";
  linkText: string;
  redirectUrl: string;
};
