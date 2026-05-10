import React from "react";
import { generateInsights } from "@/lib/genrateInsights";
import {
  AlertTriangle,
  Info,
  CircleCheck,
} from "lucide-react";
import InfoCard from "../shared/InfoCard";

const Section = ({ title, children }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2.5 space-y-3">
    <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
      {title}
    </h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const Insights = ({ results }) => {
  if (!results) return null;

  const { warnings, insights, recommendations } =
    generateInsights(results);

  return (
    <div className="space-y-5">


      {insights.length > 0 && (
        <Section title="Insights">
          {insights.slice(0, 2).map((item, i) => (
            <InfoCard
              key={`ins-${i}`}
              icon={
                <Info className="w-5 h-5 text-[#FFC300]" />
              }
              message={item.message}
            />
          ))}
        </Section>
      )}

      {/* ========================= */}
      {/* WARNING (MAX 1) */}
      {/* ========================= */}
      {warnings.length > 0 && (
        <Section title="Warnings">
          {warnings.slice(0, 1).map((item, i) => (
            <InfoCard
              key={`warn-${i}`}
              icon={
                <AlertTriangle className="w-5 h-5 text-[#DC143C]" />
              }
              message={item.message}
            />
          ))}
        </Section>
      )}

      {/* ========================= */}
      {/* RECOMMENDATIONS (MAX 2) */}
      {/* ========================= */}
      {recommendations.length > 0 && (
        <Section title="Recommendations">
          {recommendations.slice(0, 2).map((item, i) => (
            <InfoCard
              key={`rec-${i}`}
              icon={
                <CircleCheck className="w-5 h-5 text-[#10B981]" />
              }
              message={item.message}
            />
          ))}
        </Section>
      )}

    </div>
  );
};

export default Insights;