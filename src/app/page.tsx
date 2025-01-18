"use client";

import ErrorMessage from "@/components/common/error-message";
import LinkComponent from "@/components/common/link-component";
import Loading from "@/components/common/loading";
import ContentBlock from "@/components/content/content-block";
import { HomeController } from "@/controllers/home-controller";
import { CONTENT_TYPE } from "@/utils/constants/contentful";

export default function Home() {
  const { data, isLoading, error } = HomeController().useHomePageContent();
  if (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching homepage data." />
    );
  }
  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <main className="flex flex-col">
      <div className="mb-10">
        <h1>{data.title}</h1>
        {data.overviewText && (
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: data.overviewText }}
          />
        )}
        {data.overviewButton && <LinkComponent data={data.overviewButton} />}
      </div>
      <div>
        {data.content.map((item, i) => {
          if (item.__typename === CONTENT_TYPE.CONTENT_BLOCK) {
            return <ContentBlock key={"content-" + i} data={item} />;
          }
        })}
      </div>
    </main>
  );
}
