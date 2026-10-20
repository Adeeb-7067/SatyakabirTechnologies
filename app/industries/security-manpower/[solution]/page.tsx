import React, { Suspense } from "react";
import {
  securityManpowerSolutionsData,
  resolveSecuritySolutionSlug,
  SecuritySolutionData,
} from "../solutionsData";
import SolutionClient from "./SolutionClient";

// Generate static params for all solution pages
export async function generateStaticParams() {
  return Object.keys(securityManpowerSolutionsData).map((slug) => ({
    solution: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution: slug } = await params;
  const resolvedSlug = resolveSecuritySolutionSlug(slug);
  const data = securityManpowerSolutionsData[resolvedSlug];
  const pageTitle = `${data.heroTitle.line1} ${data.heroTitle.line2Blue} | Satya Kabir Technologies`;
  return {
    title: pageTitle,
    description: data.subtitle,
  };
}

export default function SecurityManpowerSolutionPage({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#060c14]" />}>
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
  const resolvedSlug = resolveSecuritySolutionSlug(slug);
  const data: SecuritySolutionData = securityManpowerSolutionsData[resolvedSlug];

  return <SolutionClient data={data} />;
}
