"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import StaticPage from "@/components/content/static-page";
import { HomeController } from "@/controllers/home-controller";

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
      <StaticPage data={data} />
    </main>
  );
}
