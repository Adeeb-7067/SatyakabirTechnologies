import React, { Suspense } from "react";
import {
  tourTravelsSolutionsData,
  resolveTourSolutionSlug,
  TourSolutionData,
} from "../solutionsData";
import TourSolutionClient from "./TourSolutionClient";

// Generate static params for all solution pages
export async function generateStaticParams() {
  return Object.keys(tourTravelsSolutionsData).map((slug) => ({
    solution: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution: slug } = await params;
  const resolvedSlug = resolveTourSolutionSlug(slug);
  const data = tourTravelsSolutionsData[resolvedSlug];
  const pageTitle = `${data.heroTitle.line1} ${data.heroTitle.line2Blue} | Satya Kabir Technologies`;
  return {
    title: pageTitle,
    description: data.aboutEcosystem,
  };
}

export default function TourTravelsSolutionPage({
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
  const resolvedSlug = resolveTourSolutionSlug(slug);
  const data: TourSolutionData = tourTravelsSolutionsData[resolvedSlug];

  return <TourSolutionClient data={data} />;
}
