import { initialScoringParams } from "../parameter/intialScoringParams";
import { experienceScore } from "./experienceScore";
import { averageTenurescore } from "./averageTenurescore";
import { promotionScore } from "./promotionScore";
import { employmentGap } from "./employmentGap";

export const intialScore = (
  userData: Record<string, string | boolean | number>
) => {
  let score = 0;
  let summary: { key: string; label: string; points: number }[] = [];

  initialScoringParams?.forEach((parameter) => {

    const value = userData[parameter.key];

    if (parameter.key === "totalExperienceYears") {
      const points = experienceScore(value)
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points
      })
      score = score + points;
    }
    else if (parameter.key === "averageTenureYears") {
      const points = averageTenurescore(value)
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points
      })
      score = score + points;
    }
    else if (parameter.key === "promotionsCount") {
      const points = promotionScore(value)
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points
      })
      score = score + points;
    }
    else if (parameter.key === "employmentGapsMonths") {
      const points = employmentGap(value)
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points
      })
      score = score + points;
    }
    else if (parameter.key === "lastEmployerTenureYears") {
      let points = 0
      if (value >= 1) {
        points = 11.11
      } else {
        points = 0
      }
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points
      })
      score = score + points;
    }
    else if (parameter.key === "jobsInLast5Years") {
      let points = 0
      if (value <= 4) {
        points = 11.11
      } else {
        points = 0
      }
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points
      })
      score = score + points;
    }
    else if (parameter.key === "longestSingleTenureYears") {
      let points = 0
      if (value >= 2) {
        points = 11.11
      } else {
        points = 0
      }
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points
      })
      score = score + points;
    }
    else if (parameter.key === "employmentGapsMonths") {
      const points = employmentGap(value)
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points
      })
      score = score + points;
    }
    else {
      if (typeof value === "undefined") return;

      if (parameter?.type === "boolean") {
        if (typeof value === "boolean") {
          score = score + parameter?.weight;
        }
        summary.push({
          key: parameter?.key,
          label: parameter?.label,
          points: value === true ? parameter.weight : 0,
        });
      } else {
        if (typeof value === "number" && value > 0) {
          score = score + parameter?.weight;
        }
        summary.push({
          key: parameter?.key,
          label: parameter?.label,
          // points: parameter?.weight
          points: typeof value === "number" && value > 0 ? parameter.weight : 0,
        });
      }
    }



  });

  return {
    score,
    summary,
  };
};
