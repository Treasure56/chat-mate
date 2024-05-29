import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const result = await streamText({
    model: google("models/gemini-pro"),
    messages,
  });
  return result.toAIStreamResponse();
}
