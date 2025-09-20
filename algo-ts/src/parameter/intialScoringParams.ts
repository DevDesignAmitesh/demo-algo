export const initialScoringParams = [

  // EMPLOYMENT TENURE STABILITY (300–400)
  {
    key: "totalExperienceYears",
    label: "Total Professional Experience (Years)",
    type: "number",
    weight: 25,
    question: "What is the candidate's total professional experience (in years)?",
    validation: { min: 0, max: 50 }
  },
  {
    key: "averageTenureYears",
    label: "Average Tenure Per Employer (Years)",
    type: "number",
    weight: 25,
    question: "What is the candidate's average tenure per employer (in years)?",
    validation: { min: 0, max: 15 }
  },
  {
    key: "lastEmployerTenureYears",
    label: "Tenure at Last Employer (Years)",
    type: "number",
    weight: 11.11,
    question: "How many years did the candidate work at their last employer?",
    validation: { min: 0, max: 30 }
  },
  {
    key: "jobsInLast5Years",
    label: "Number of Jobs Held in Last 5 Years",
    type: "number",
    weight: 11.11,
    question: "How many distinct jobs has the candidate held in the last 5 years?",
    validation: { min: 0, max: 10 }
  },
  {
    key: "longestSingleTenureYears",
    label: "Longest Single Employer Tenure (Years)",
    type: "number",
    weight: 11.11,
    question: "What is the candidate's longest continuous tenure with a single employer (years)?",
    validation: { min: 0, max: 30 }
  },
  {
    key: "employmentGapsMonths",
    label: "Largest Employment Gap (Months)",
    type: "number",
    weight: 25,
    question: "What is the longest gap between two jobs as listed on the CV (in months)?",
    validation: { min: 0, max: 60 }
  },
  {
    key: "promotionsCount",
    label: "Number of Promotions (listed on CV)",
    type: "number",
    weight: 25,
    question: "How many promotions are listed in the candidate's CV/employment history?",
    validation: { min: 0, max: 15 }
  },
  // {
  //   key: "contractRolesCount",
  //   label: "Number of Contract / Temporary Roles",
  //   type: "number",
  //   weight: 305,
  //   question: "How many contract, temporary or freelance roles are listed on the CV?",
  //   validation: { min: 0, max: 20 }
  // },

  // JOINING & EXIT BEHAVIOUR (400–500)

  // {
  //   key: "currentNoticePeriodWeeks",
  //   label: "Current Notice Period (Weeks)",
  //   type: "number",
  //   weight: 420,
  //   question: "What is the candidate's current notice period (in weeks)?",
  //   validation: { min: 0, max: 52 }
  // },
  {
    key: "servedFullNoticeLastExit",
    label: "Served Full Notice Period at Last Exit",
    type: "boolean",
    weight: 11.11,
    question: "Did the candidate serve the full notice period at their last exit?"
  },
  // {
  //   key: "abscondingRecord",
  //   label: "Any Past Absconding Record",
  //   type: "boolean",
  //   weight: 11.11,
  //   question: "Does the candidate have any past record of absconding or leaving without formal notice?"
  // },
  {
    key: "rehireEligibilityFromLastEmployer",
    label: "Marked Eligible for Rehire by Last Employer",
    type: "boolean",
    weight: 11.11,
    question: "Is the candidate indicated as eligible for rehire by their previous employer (if known)?"
  },
  {
    key: "properHandoverDocumented",
    label: "Handover / Knowledge Transfer Documented at Exit",
    type: "boolean",
    weight: 11.11,
    question: "Was a formal handover/knowledge transfer documented and provided at the candidate's last exit?"
  },
  // {
  //   key: "exitDisputesCount",
  //   label: "Number of Formal Exit Disputes / Grievances",
  //   type: "number",
  //   weight: 470,
  //   question: "How many formal exit disputes or HR grievances are recorded or reported for the candidate?",
  //   validation: { min: 0, max: 10 }
  // },
  // {
  //   key: "exitType",
  //   label: "Exit Type (1=Voluntary,2=Mutual,3=Terminated)",
  //   type: "number",
  //   weight: 11.11,
  //   question: "What was the type of exit from the last employer? (1=Voluntary resignation, 2=Mutual separation, 3=Termination)",
  //   validation: { min: 1, max: 3 }
  // },
  {
    key: "joinedOnAgreedDate",
    label: "Joined On Agreed Start Date (for last joining)",
    type: "boolean",
    weight: 11.11,
    question: "Did the candidate join their last role on the agreed/advertised start date?"
  }
];




// old parameters:- 
[
  {
    key: "lastEmployerTenure",
    label: "Tenure at last employer",
    type: "number",
    weight: 50,
    question: "How many years did the employee work at their last employer?",
    validation: { min: 0, max: 10 },
  },
  {
    key: "leadershipRoles",
    label: "Leadership Roles Held",
    type: "boolean",
    weight: 80,
    question: "Has the employee ever held a leadership role?",
  },
  {
    key: "mncExperience",
    label: "Work Experience in MNCs",
    type: "boolean",
    weight: 60,
    question: "Has the employee ever worked at a multinational company?",
  },
  {
    key: "disputeFreeRecord",
    label: "Dispute-Free Record",
    type: "boolean",
    weight: 70,
    question:
      "Does the employee have a dispute-free record with past employers?",
  },
  {
    key: "promotionCount",
    label: "Promotion Count",
    type: "number",
    weight: 90,
    question: "How many promotions has the employee received in past roles?",
    validation: { min: 0, max: 10 },
  },
  {
    key: "certifications",
    label: "Industry Certifications",
    type: "number",
    weight: 60,
    question:
      "How many industry-recognized certifications does the employee have?",
    validation: { min: 0, max: 20 },
  },
  {
    key: "globalExperience",
    label: "Global/International Experience",
    type: "boolean",
    weight: 70,
    question: "Has the employee worked internationally or with global teams?",
  },
  {
    key: "innovation",
    label: "Innovation / Patents",
    type: "boolean",
    weight: 100,
    question:
      "Has the employee been involved in innovation, new products, or patents?",
  },
  {
    key: "externalAwards",
    label: "External Honors & Awards",
    type: "boolean",
    weight: 100,
    question: "Has the employee received any external honors or awards?",
  },
  {
    key: "openSourceContributions",
    label: "Open Source Contributions",
    type: "boolean",
    weight: 50,
    question: "Has the employee contributed to open-source projects?",
  },
]