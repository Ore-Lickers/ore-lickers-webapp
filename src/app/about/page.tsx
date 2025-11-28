"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import StaticPage from "@/components/content/static-page";
import { AboutController } from "@/controllers/about-controller";

export default function About() {
  const { data, isLoading, error } = AboutController.getAboutPageContent();
  if (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching about-us page data." />
    );
  }
  if (isLoading || !data) {
    return <Loading />;
  }

  return <StaticPage data={data} />;
}
