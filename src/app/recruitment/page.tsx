"use client";

import ErrorMessage from "@/components/common/error-message";
import Loading from "@/components/common/loading";
import StaticPage from "@/components/content/static-page";
import { RecruitmentController } from "@/controllers/recruitment-controller";

export default function Recruitment() {
  const { data, isLoading, error } =
    RecruitmentController.getRecruitmentPageContent();
  if (error) {
    return (
      <ErrorMessage message="Something went wrong when fetching recruitment page data." />
    );
  }
  if (isLoading || !data) {
    return <Loading />;
  }

  return <StaticPage data={data} />;
}
