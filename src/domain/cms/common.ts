export type Collection<T> = {
  items: T[];
};

export type GetContentByPageParams = {
  page: string;
  locale?: string;
  preview?: boolean;
};
