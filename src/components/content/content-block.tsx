import LinkComponent from "../common/link-component";
import ImageComponent from "../common/image-component";
import Description from "../common/description";
import { ContentBlockType } from "@/domain/cms/components/content-block";

interface ContentBlockParams {
  readonly data: ContentBlockType;
}

export default function ContentBlock({ data }: ContentBlockParams) {
  return (
    <div className="mb-5">
      {data.title && <h2>{data.title}</h2>}
      {data.description1 && (
        <div className="mb-5">
          <Description data={data.description1} />
        </div>
      )}
      {data.image && (
        <div className="mb-5 flex justify-center">
          <ImageComponent data={data.image} />
        </div>
      )}
      {data.description2 && <Description data={data.description2} />}
      {data.link && <LinkComponent data={data.link} />}
    </div>
  );
}
