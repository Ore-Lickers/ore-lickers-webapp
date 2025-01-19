import { StaticPageType } from "@/domain/cms/static-page";
import LinkComponent from "@/components/common/link-component";
import ContentBlock from "@/components/content/content-block";
import { CONTENT_TYPE } from "@/utils/constants/contentful";

interface StaticPageParams {
  readonly data: StaticPageType;
}

export default function StaticPage({ data }: StaticPageParams) {
  return (
    <div>
      <h1>{data.title}</h1>
      {(data.overviewText || data.overviewButton) && (
        <div className="mb-10">
          {data.overviewText && (
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: data.overviewText }}
            />
          )}
          {data.overviewButton && <LinkComponent data={data.overviewButton} />}
        </div>
      )}
      <div>
        {data.content.map((item, i) => {
          if (item.__typename === CONTENT_TYPE.CONTENT_BLOCK) {
            return <ContentBlock key={"content-" + i} data={item} />;
          }
        })}
      </div>
    </div>
  );
}
