export type EntryType = {
  sys: {
    id: string;
  };
  __typename: string;
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
