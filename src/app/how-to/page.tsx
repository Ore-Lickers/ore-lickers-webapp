"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import StaticPage from "@/components/content/static-page";
import { HowToController } from "@/controllers/how-to-controller";

export default function HowTo() {
  const { data, isLoading, error } = HowToController.getHowToPageContent();
  if (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching how-to page data." />
    );
  }
  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <main className="flex flex-col">
      <StaticPage data={data} />
    </main>
  );
}
