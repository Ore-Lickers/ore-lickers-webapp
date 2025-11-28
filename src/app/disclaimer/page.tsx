"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import StaticPage from "@/components/content/static-page";
import { DisclaimerController } from "@/controllers/disclaimer-controller";

export default function Disclaimer() {
  const { data, isLoading, error } =
    DisclaimerController.getDisclaimerPageContent();
  if (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching disclaimer page data." />
    );
  }
  if (isLoading || !data) {
    return <Loading />;
  }

  return <StaticPage data={data} />;
}
