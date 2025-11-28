"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import StaticPage from "@/components/content/static-page";
import { BuybackController } from "@/controllers/buy-back-controller";

export default function Buyback() {
  const { data, isLoading, error } = BuybackController.getBuybackPageContent();
  if (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching buyback page data." />
    );
  }
  if (isLoading || !data) {
    return <Loading />;
  }

  return <StaticPage data={data} />;
}
