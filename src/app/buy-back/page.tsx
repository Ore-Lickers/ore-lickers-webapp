"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import StaticPage from "@/components/content/static-page";
import { BuyBackController } from "@/controllers/buy-back-controller";

export default function BuyBack() {
  const { data, isLoading, error } = BuyBackController.getBuyBackPageContent();
  if (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching buy-back page data." />
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
