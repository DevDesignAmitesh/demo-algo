import z from "zod";

export const initialDatafromUserSchema = z.object({
  totalExperienceYears: z.number(),
  averageTenureYears: z.number(),
  lastEmployerTenureYears: z.number(),
  jobsInLast5Years: z.number(),
  longestSingleTenureYears: z.number(),
  employmentGapsMonths: z.number(),
  promotionsCount: z.number(),
  // contractRolesCount: z.number(),
  // currentNoticePeriodWeeks: z.number(),
  servedFullNoticeLastExit: z.boolean(),
  // abscondingRecord: z.boolean(),
  rehireEligibilityFromLastEmployer: z.boolean(),
  properHandoverDocumented: z.boolean(),
  // exitDisputesCount: z.number(),
  // exitType: z.number(),
  joinedOnAgreedDate: z.boolean(),
});
