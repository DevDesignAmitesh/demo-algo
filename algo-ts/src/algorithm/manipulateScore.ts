import { severity } from "../parameter/severity"

interface feedBackType {
    key: string,
    severity: string,
    status: string,
}

export const manipulateScore = (feedbacks: feedBackType[]) => {
    const feedbackSummary = feedbacks.map(feedback => {
        const weightage = severity[feedback.severity] || 0;
        const points = feedback.status === "negative" ? -weightage : weightage;

        user.score += points;

        return {
            key: feedback.key,
            label: "Here we add label in gemini things so we can show that in the reports",
            points
        };
    });

    return {
        ...user,
        feedbackSummary
    };
};

// dummy user data 

const user = {
    "score": 399,
    "summary": [
        {
            "key": "account_creation",
            "label": "Score after generating your naukri score",
            "points": 100
        },
        {
            "key": "background_verification",
            "label": "Score after completing your background checks",
            "points": 100
        },
        {
            "key": "totalExperienceYears",
            "label": "Total Professional Experience (Years)",
            "points": 24.9
        },
        {
            "key": "averageTenureYears",
            "label": "Average Tenure Per Employer (Years)",
            "points": 25
        },
        {
            "key": "lastEmployerTenureYears",
            "label": "Tenure at Last Employer (Years)",
            "points": 14.28
        },
        {
            "key": "jobsInLast5Years",
            "label": "Number of Jobs Held in Last 5 Years",
            "points": 14.28
        },
        {
            "key": "longestSingleTenureYears",
            "label": "Longest Single Employer Tenure (Years)",
            "points": 14.28
        },
        {
            "key": "employmentGapsMonths",
            "label": "Largest Employment Gap (Months)",
            "points": 25
        },
        {
            "key": "promotionsCount",
            "label": "Number of Promotions (listed on CV)",
            "points": 25
        },
        {
            "key": "servedFullNoticeLastExit",
            "label": "Served Full Notice Period at Last Exit",
            "points": 14.28
        },
        {
            "key": "rehireEligibilityFromLastEmployer",
            "label": "Marked Eligible for Rehire by Last Employer",
            "points": 14.28
        },
        {
            "key": "properHandoverDocumented",
            "label": "Handover / Knowledge Transfer Documented at Exit",
            "points": 14.28
        },
        {
            "key": "joinedOnAgreedDate",
            "label": "Joined On Agreed Start Date (for last joining)",
            "points": 14.28
        }
    ]
}
