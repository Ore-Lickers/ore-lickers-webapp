interface DescriptionParams {
  readonly data: string;
  readonly classes?: string;
}

export default function Description({ data, classes = "" }: DescriptionParams) {
  return (
    <div
      className={"rich-text " + classes}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
