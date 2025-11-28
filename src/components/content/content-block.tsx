import LinkComponent from "../common/link-component";
import ImageComponent from "../common/image-component";
import Description from "../common/description";
import { ContentBlockType } from "@/domain/components/content-block-type";

interface ContentBlockParams {
  readonly data: ContentBlockType;
}

export default function ContentBlock({ data }: ContentBlockParams) {
  return (
    <div className="mb-5">
      {data.title && <h2>{data.title}</h2>}
      {data.description && (
        <div className="mb-5">
          <Description data={data.description} />
        </div>
      )}
      {data.image && (
        <div className="mb-5 flex justify-center">
          <ImageComponent data={data.image} />
        </div>
      )}
      {data.link && <LinkComponent data={data.link} />}
    </div>
  );
}
