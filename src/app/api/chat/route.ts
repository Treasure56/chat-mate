import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages } from "ai";
import { NextRequest } from "next/server";

export const maxDuration = 30;
export async function POST(req: NextRequest) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = await streamText({
    model: google("gemini-2.5-pro"),
    messages: convertToModelMessages(messages),

  });
   return result.toUIMessageStreamResponse();
}
