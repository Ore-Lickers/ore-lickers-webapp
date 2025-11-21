export type ImageComponentType = {
  title: string;
  altText: string;
  desktop: ContentfulImage;
  mobile?: ContentfulImage;
  url?: string;
};

export type ContentfulImage = {
  url: string;
  height: number;
  width: number;
};
