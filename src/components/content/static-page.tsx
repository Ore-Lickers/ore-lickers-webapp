import ContentBlock from "@/components/content/content-block";
import { StaticPageType } from "@/domain/pages/static-page-type";

interface StaticPageParams {
  readonly data: StaticPageType;
}

export default function StaticPage({ data }: StaticPageParams) {
  return (
    <div className="container mx-auto">
      <h1>{data.title}</h1>
      <div>
        {data.content.map((item, i) => (
          <ContentBlock key={"content-" + i} data={item} />
        ))}
      </div>
    </div>
  );
}
