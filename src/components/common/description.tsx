interface DescriptionParams {
  readonly data: string;
}

export default function Description({ data }: DescriptionParams) {
  return (
    <div className="rich-text" dangerouslySetInnerHTML={{ __html: data }} />
  );
}
