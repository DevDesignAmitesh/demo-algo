import { initialScoringParams } from "../parameter/intialScoringParams";
import { experienceScore } from "./experienceScore";
import { averageTenurescore } from "./averageTenurescore";
import { promotionScore } from "./promotionScore";
import { employmentGap } from "./employmentGap";

export const intialScore = (
  userData: Record<string, string | boolean | number>
) => {
  // let score = 0;

  // for testing
  let score = 200;
  let summary: { key: string; label: string; points: number }[] = [];

  summary.push({
    key: "account_creation",
    label: "Score after generating your naukri score",
    points: 100,
  });

  summary.push({
    key: "background_verification",
    label: "Score after completing your background checks",
    points: 100,
  });

  initialScoringParams?.forEach((parameter) => {
    const value = userData[parameter.key];

    if (parameter.key === "totalExperienceYears" && typeof value === "number") {
      const points = experienceScore(value);
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points,
      });
      score = score + points;
    } else if (
      parameter.key === "averageTenureYears" &&
      typeof value === "number"
    ) {
      const points = averageTenurescore(value);
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points,
      });
      score = score + points;
    } else if (
      parameter.key === "promotionsCount" &&
      typeof value === "number"
    ) {
      const points = promotionScore(value);
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points,
      });
      score = score + points;
    } else if (
      parameter.key === "employmentGapsMonths" &&
      typeof value === "number"
    ) {
      const points = employmentGap(value);
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points,
      });
      score = score + points;
    } else if (
      parameter.key === "lastEmployerTenureYears" &&
      typeof value === "number"
    ) {
      let points = 0;
      if (value >= 1) {
        points = parameter?.weight;
      } else {
        points = 0;
      }
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points,
      });
      score = score + points;
    } else if (
      parameter.key === "jobsInLast5Years" &&
      typeof value === "number"
    ) {
      let points = 0;
      if (value <= 4) {
        points = parameter?.weight;
      } else {
        points = 0;
      }
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points,
      });
      score = score + points;
    } else if (
      parameter.key === "longestSingleTenureYears" &&
      typeof value === "number"
    ) {
      let points = 0;
      if (value >= 2) {
        points = parameter?.weight;
      } else {
        points = 0;
      }
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points,
      });
      score = score + points;
    } else if (
      parameter.key === "employmentGapsMonths" &&
      typeof value === "number"
    ) {
      const points = employmentGap(value);
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: points,
      });
      score = score + points;
    } else {
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
    score: Number(Math.floor(score).toFixed(0)),
    summary,
  };
};
