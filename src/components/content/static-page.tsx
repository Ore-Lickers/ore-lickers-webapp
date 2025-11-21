import LinkComponent from "@/components/common/link-component";
import ContentBlock from "@/components/content/content-block";
import { CONTENT_TYPE } from "@/utils/constants/contentful";
import CardBlock from "./card-block";
import CarouselComponent from "./carousel";
import { CardBlockType } from "@/domain/cms/components/card";
import { CarouselType } from "@/domain/cms/components/carousel";
import { ContentBlockType } from "@/domain/cms/components/content-block";
import { StaticPageType } from "@/domain/cms/pages/static-page";

interface StaticPageParams {
  readonly data: StaticPageType;
}

export default function StaticPage({ data }: StaticPageParams) {
  return (
    <div className="container mx-auto">
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
            return (
              <ContentBlock
                key={"content-" + i}
                data={item as ContentBlockType}
              />
            );
          }
          if (item.__typename === CONTENT_TYPE.CARD_BLOCK) {
            return <CardBlock key={"card-" + i} data={item as CardBlockType} />;
          }
          if (item.__typename === CONTENT_TYPE.CAROUSEL) {
            return (
              <CarouselComponent
                key={"carousel-" + i}
                data={item as CarouselType}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
