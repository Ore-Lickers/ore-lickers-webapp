"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import CardBlock from "@/components/content/card-block";
import CarouselComponent from "@/components/content/carousel";
import { HomeController } from "@/controllers/home-controller";

export default function Home() {
  const { data, isLoading, error } = HomeController.getHomepageContent();
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
      <div className="container mx-auto">
        <h1>{data.title}</h1>
        <div className="mb-10">
          {data.description && (
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          )}
        </div>
        <div className="mb-10">
          {data.carousel && <CarouselComponent data={data.carousel} />}
        </div>
        <div>{data.cardBlock && <CardBlock data={data.cardBlock} />}</div>
      </div>
    </main>
  );
}
