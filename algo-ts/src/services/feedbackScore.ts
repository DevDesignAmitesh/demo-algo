import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import { feedbackScoreSchema } from "../zod/feedbackScoreSchema";
import { feedbackParamsNegative } from "../parameter/feedbackParams";
import { feedbackParamsPositive } from "../parameter/feedbackParams";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { manipulateScore } from "../algorithm/manipulateScore";
import { prompt } from "../utils/prompt";

// Gemini Client
const genAI = new GoogleGenerativeAI("AIzaSyCts46P346z8tJcmHdyknbdqwDUdnIJZ7A");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const feedbackScore = async (req: Request, res: Response) => {
  try {
    const { success, error, data } = feedbackScoreSchema.safeParse(req.body);

    if (!success) {
      return responsePlate(res, {
        message: "Validation failed",
        status: 411,
        success: false,
        data: error.issues.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      });
    }

    const { aadhaarNumber, isWorkedWithYou, keyPoints, message } = data;

    // extracting those points which are not in our feedback params
    const notFindKeys = keyPoints.filter(
      (keyElm) => keyElm?.status === "negative" ?
        !feedbackParamsNegative.some(
          (fdElm) =>
            fdElm?.key.trim().toLowerCase() === keyElm.trim().toLowerCase()
        ) :
        !feedbackParamsPositive.some(
          (fdElm) =>
            fdElm?.key.trim().toLowerCase() === keyElm.trim().toLowerCase()
        )
    );

    // console.log(notFindKeys);

    const foundKeys = keyPoints.filter(
      (keyElm) =>
        !notFindKeys.some(
          (ndElm) => ndElm?.trim().toLowerCase() === keyElm.trim().toLowerCase()
        )
    );

    console.log("these are the found keys = ", foundKeys);

    const geminiResp = await model.generateContent(prompt(notFindKeys));

    let geminiText = geminiResp.response.text();
    // console.log("Gemini Raw Output:\n", geminiText);

    geminiText = geminiText.replace(/```json|```/g, "").trim();

    const geminiParsedRes = JSON.parse(geminiText);

    console.log("Gemini Parsed Output:\n", geminiParsedRes);

    const feedbackResult = manipulateScore(geminiParsedRes)

    if (feedbackResult) {
      return responsePlate(res, {
        success: true,
        status: 200,
        message: "Feedback Submitted Successfully",
        data: feedbackResult
      });
    }

  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
};
