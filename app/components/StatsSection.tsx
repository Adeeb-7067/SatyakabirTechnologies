import React from "react";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: "120+",
    label: "Projects Delivered",
  },
  {
    value: "5",
    label: "Industries Served",
  },
  {
    value: "10+",
    label: "Years of Ex",
  },
  {
    value: "98%",
    label: "Client Retention",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#131622] relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#2e3447]">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center py-5 md:py-2 ${
                index === 0
                  ? "md:pr-8 lg:pr-10"
                  : index === stats.length - 1
                  ? "md:pl-8 lg:pl-10"
                  : "md:px-8 lg:px-10"
              } ${index % 2 === 0 ? "pr-4 sm:pr-6" : "pl-4 sm:pl-6 md:pl-8"}`}
            >
              <span className="text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-bold text-white tracking-tight leading-none font-sans">
                {stat.value}
              </span>
              <span className="text-sm sm:text-[15px] md:text-[16px] text-slate-300 font-normal mt-2.5 sm:mt-3 tracking-normal">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
