// utils/generateInsights.js

export function generateInsights(results) {
  const warnings = [];
  const insights = [];
  const recommendations = [];

  if (!results) {
    return {
      warnings: [
        {
          message:
            "Configure your energy inputs to generate your solar system report.",
        },
      ],
      insights,
      recommendations,
    };
  }

  const { energy, panels, inverter, battery } = results;

  // =========================
  // WARNINGS (ONLY HIGH IMPACT)
  // =========================

  if (energy > 8000) {
    warnings.push({
      message:
        "High energy demand detected. This may require a large-scale solar installation or hybrid system.",
    });
  } else if (energy < 500) {
    warnings.push({
      message:
        "Very low energy estimate. Please verify your inputs for missing appliances.",
    });
  }

  if (inverter >= 5000) {
    warnings.push({
      message:
        "Large inverter system detected. Professional installation is recommended for safety and efficiency.",
    });
  }

  if (panels >= 10) {
    warnings.push({
      message:
        "High number of solar panels required. Ensure adequate roof space and proper layout planning.",
    });
  }

  // =========================
  // INSIGHTS (SYSTEM BEHAVIOR ONLY)
  // =========================

  if (energy <= 2500) {
    insights.push({
      message:
        "Your energy usage is typical of a compact or low-consumption household.",
    });
  } else if (energy <= 6000) {
    insights.push({
      message:
        "Your usage falls within a standard residential consumption range.",
    });
  } else {
    insights.push({
      message:
        "Your consumption indicates multiple high-load appliances or continuous usage systems.",
    });
  }

  if (panels <= 4) {
    insights.push({
      message:
        "Your system is relatively efficient and requires a small solar array.",
    });
  } else if (panels <= 8) {
    insights.push({
      message:
        "Your solar requirement is moderate and typical for average households.",
    });
  } else {
    insights.push({
      message:
        "Your setup requires a larger solar array, likely for higher energy independence.",
    });
  }

  // =========================
  // RECOMMENDATIONS (ACTION ONLY)
  // =========================

  recommendations.push({
    message:
      "Install solar panels in unshaded areas with optimal sun exposure for maximum efficiency.",
  });

  recommendations.push({
    message:
      "Consider slightly oversizing your system to accommodate future energy growth.",
  });

  if (energy > 6000) {
    recommendations.push({
      message:
        "Adopt energy-efficient appliances to significantly reduce system cost and size.",
    });
  }

  if (inverter >= 3000) {
    recommendations.push({
      message:
        "Ensure proper load balancing to optimize inverter performance and lifespan.",
    });
  } else {
    recommendations.push({
      message:
        "Your inverter size allows room for moderate future appliance additions.",
    });
  }

  if (battery > 200) {
    recommendations.push({
      message:
        "A modular battery system may improve scalability and long-term flexibility.",
    });
  } else {
    recommendations.push({
      message:
        "Your battery requirement is compact and suitable for basic backup needs.",
    });
  }

  return {
    warnings,
    insights,
    recommendations,
  };
}