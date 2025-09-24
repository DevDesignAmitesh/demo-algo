export const prompt = (notFoundKeys: string[]): string => {
  return `
You are given a list of user-provided inputs. Your task is to map each input to a structured JSON object representing a feedback parameter with specific attributes.

Each object must strictly follow the interface and rules below:

---

### **Types & Rules**
1. **Severity Type (severity):**
   - Must be one of: 
     \`"veryLow" | "low" | "belowAverage" | "moderate" | "aboveModerate" | "high" | "veryHigh" | "elite"\`
   - Choose based on the impact of the behavior:
     - **veryLow** → Minor positive or neutral factors (e.g., language proficiency).
     - **low** → Small positive traits or slightly negative behaviors.
     - **belowAverage** → Slightly below standard performance or soft skill issues.
     - **moderate** → Commonly seen positive or negative behaviors with some impact.
     - **aboveModerate** → Strong positive achievement or notable negative issue.
     - **high** → Significant positive contribution or serious negative problem.
     - **veryHigh** → Very critical issues or extremely valuable contributions.
     - **elite** → Rare, top-tier achievements or exceptional recognition.

2. **Status Type (status):**
   - **"positive"** → When the key reflects a good quality, achievement, or strength.
   - **"negative"** → When the key reflects a problem, misconduct, or weakness.

3. **Description (description):**
   - A **short, clear explanation** of what the key represents.
   - Written in a neutral tone.

4. **Label (label):**
   - A **user-facing sentence** that describes the situation clearly and naturally.
   - Must read like direct feedback for the user.

---

### **Interface Definition**
\`\`\`typescript
interface FeedbackParamsProps {
  key: string;
  severity: severityType;
  status: statusType;
  description: string;
  label: string;
}
\`\`\`

---

### **Examples:**

#### Positive Example
\`\`\`json
{
  "key": "languagesKnown",
  "severity": "veryLow",
  "status": "positive",
  "description": "Languages candidate can speak or write.",
  "label": "You are proficient in multiple languages, which adds value to communication."
}
\`\`\`

#### Positive Example 2
\`\`\`json
{
  "key": "internationalEducationExposure",
  "severity": "veryLow",
  "status": "positive",
  "description": "Education experience in another country.",
  "label": "Your international education exposure reflects diverse learning experiences."
}
\`\`\`

#### Negative Example
\`\`\`json
{
  "key": "jobAbandonment",
  "severity": "veryHigh",
  "status": "negative",
  "description": "Employee leaves the job suddenly without any notice.",
  "label": "It was reported that you left a job suddenly without providing any notice, which affected the team and company operations."
}
\`\`\`

#### Negative Example 2
\`\`\`json
{
  "key": "notServingNoticePeriod",
  "severity": "veryHigh",
  "status": "negative",
  "description": "Resigning but not working through the required notice period.",
  "label": "An employer stated that you resigned without completing your notice period, causing disruptions in the workflow."
}
\`\`\`

---

### **Instructions:**
- For each user input, generate **exactly one JSON object**.
- The \`key\` should be a **unique, camelCase identifier** derived from the input.
- Always return an **array of JSON objects**.
- **DO NOT** include extra text, explanations, or formatting outside the JSON array.
- Ensure that every object strictly adheres to the interface and examples above.

---

### **User Input:**
${JSON.stringify(notFoundKeys)}

---

### **Expected Output Format:**
\`\`\`json
[
  {
    "key": "exampleKey",
    "severity": "low",
    "status": "positive",
    "description": "This is a description of the key.",
    "label": "This is a natural language label explaining the key."
  }
]
\`\`\`
`;
};



// export const prompt = (notFindKeys: string[]): string => {
//   return `
//       you have to identify the key which is given as user input like it is positive things or negitive things than have to give it a unique key, serverity type define below (it depends on user input), than status type - it describe the key given by the user is negitive or positive, then description of key it description about the key and at the end their is label which like a answer example for key "ghostingAfterOffer" there is a label called - "One of your employers mentioned that you accepted a job offer but later stopped responding and didn’t join, which reflects poorly on your reliability.", example - 2 for key "perfectAttendancePunctuality" their is a label "You consistently maintained perfect attendance and punctuality." i have also provided 4 full example below. u have to return the json object with the following types

//       type severityType = "high" | "veryLow" | "low" | "belowAverage" | "moderate" | "aboveModerate" | "high" | "veryHigh" | "elite";

//       type statusType = "positive" | "negative";

//       interface feedbackParamsProps {
//            key: string;
//            severity: severityType;
//            status: statusType;
//            description: string
//            label: string
//       }

//       4 examples :- 
//       1.   {
//              key: "languagesKnown",
//              severity: "veryLow",
//              status: "positive",
//              description: "Languages candidate can speak or write.",
//              label: "You are proficient in multiple languages, which adds value to communication."
//             },
//       2.  {
//             key: "internationalEducationExposure",
//             severity: "veryLow",
//             status: "positive",
//             description: "Education experience in another country.",
//             label: "Your international education exposure reflects diverse learning experiences."
//           },
//       3. {
//            key: "jobAbandonment",
//            severity: "veryHigh",
//            status: "negative",
//            description: "Employee leaves the job suddenly without any notice.",
//            label: "It was reported that you left a job suddenly without providing any notice, which affected the team and company operations."
//           },
//   4.      {
//             key: "notServingNoticePeriod",
//             severity: "veryHigh",
//             status: "negative",
//             description: "Resigning but not working through the required notice period.",
//             label: "An employer stated that you resigned without completing your notice period, causing disruptions in the workflow."
//           },

//       user input ${notFindKeys}

//       output should be like
//      [ 
//         {
//            key: string,
//            severity: "low",
//            status: "positive",
//            description: "This is a description of key",
//            label: "this is a label for a given key"
//         }
//       ]
//     `;
// };
