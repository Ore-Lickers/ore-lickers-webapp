export type Collection<T> = {
  items: T[];
};

export type GetContentByIdParams = {
  id: string;
  locale?: string;
  preview?: boolean;
};

export type GetContentByPageParams = {
  page: string;
  locale?: string;
  preview?: boolean;
};
