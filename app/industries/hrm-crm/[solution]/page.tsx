import React, { Suspense } from "react";
import {
  hrmSolutionsData,
  resolveHrmSolutionSlug,
  HrmSolutionData,
} from "../solutionsData";
import HrmSolutionClient from "./HrmSolutionClient";

// Generate static params for all solution pages
export async function generateStaticParams() {
  return Object.keys(hrmSolutionsData).map((slug) => ({
    solution: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution: slug } = await params;
  const resolvedSlug = resolveHrmSolutionSlug(slug);
  const data = hrmSolutionsData[resolvedSlug];
  const pageTitle = `${data.heroTitle.line1} ${data.heroTitle.line2} ${data.heroTitle.line2Blue} | Satya Kabir Technologies`;
  return {
    title: pageTitle,
    description: data.subtitle,
  };
}

export default function HrmSolutionPage({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-black" />}>
      <SolutionContent params={params} />
    </Suspense>
  );
}

async function SolutionContent({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution: slug } = await params;
  const resolvedSlug = resolveHrmSolutionSlug(slug);
  const data: HrmSolutionData = hrmSolutionsData[resolvedSlug];

  return <HrmSolutionClient data={data} />;
}
