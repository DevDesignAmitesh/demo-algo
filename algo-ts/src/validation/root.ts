import { ValidateTotalExperience } from "./totalExperience";
import { ValidateEmployeetenure } from "./tenure";
import { ValidateLastEmployeetenure } from "./lastTenure";
import { ValidateJobsInLast5Years } from "./validateJobsInLast5Years";
import { ValidateLongestSingleTenure } from "./validateLongestSingleTenure";
import { ValidateEmploymentGaps } from "./validateEmploymentGaps";
import { ValidatePromotionsCount } from "./validatePromotionsCount";
import { ValidateContractRoles } from "./validateContractRoles";
import { ValidateNoticePeriod } from "./validateNoticePeriod";
import { ValidateServedFullNotice } from "./validateServedFullNotice";
import { ValidateAbscondingRecord } from "./validateAbscondingRecord";
import { ValidateRehireEligibility } from "./validateRehireEligibility";
import { ValidateProperHandover } from "./validateProperHandover";
import { ValidateExitDisputes } from "./validateExitDisputes";
import { ValidateExitType } from "./validateExitType";
import { ValidateJoinedOnAgreedDate } from "./validateJoinedOnAgreedDate";

export const validateInput = (
  initialDatafromUser: Record<string, string | boolean | number>
) => {
  try {
    let questions: Array<{ key: string; question: string }> = [];

    if (initialDatafromUser.totalExperienceYears) {
      const question = ValidateTotalExperience(
        initialDatafromUser.totalExperienceYears
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.averageTenureYears) {
      const question = ValidateEmployeetenure(
        initialDatafromUser.averageTenureYears
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.lastEmployerTenureYears) {
      const question = ValidateLastEmployeetenure(
        initialDatafromUser.lastEmployerTenureYears
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateJobsInLast5Years) {
      const question = ValidateJobsInLast5Years(
        initialDatafromUser.ValidateJobsInLast5Years
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateLongestSingleTenure) {
      const question = ValidateLongestSingleTenure(
        initialDatafromUser.ValidateLongestSingleTenure
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateEmploymentGaps) {
      const question = ValidateEmploymentGaps(
        initialDatafromUser.ValidateEmploymentGaps
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidatePromotionsCount) {
      const question = ValidatePromotionsCount(
        initialDatafromUser.ValidatePromotionsCount
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateContractRoles) {
      const question = ValidateContractRoles(
        initialDatafromUser.ValidateContractRoles
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateNoticePeriod) {
      const question = ValidateNoticePeriod(
        initialDatafromUser.ValidateNoticePeriod
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateServedFullNotice) {
      const question = ValidateServedFullNotice(
        initialDatafromUser.ValidateServedFullNotice
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateAbscondingRecord) {
      const question = ValidateAbscondingRecord(
        initialDatafromUser.ValidateAbscondingRecord
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateRehireEligibility) {
      const question = ValidateRehireEligibility(
        initialDatafromUser.ValidateRehireEligibility
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateProperHandover) {
      const question = ValidateProperHandover(
        initialDatafromUser.ValidateProperHandover
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateExitDisputes) {
      const question = ValidateExitDisputes(
        initialDatafromUser.ValidateExitDisputes
      );
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateExitType) {
      const question = ValidateExitType(initialDatafromUser.ValidateExitType);
      if (question) {
        questions.push(question);
      }
    } else if (initialDatafromUser.ValidateJoinedOnAgreedDate) {
      const question = ValidateJoinedOnAgreedDate(
        initialDatafromUser.ValidateJoinedOnAgreedDate
      );
      if (question) {
        questions.push(question);
      }
    }

    return questions;
  } catch (error) {
    console.log(error);
    return [];
  }
};
