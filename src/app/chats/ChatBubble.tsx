"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

import React, { useRef } from "react";

export type ChatBubbleProps = {
  message: string;
  sender: string;
  isMe: boolean;
};

export default function ChatBubble({ isMe, message, sender }: ChatBubbleProps) {
  const ref = useRef<SyntaxHighlighter>(null);

  return (
    <div
      className={`rounded-lg p-2 ${
        isMe
          ? "bg-blue-100 dark:bg-blue-900 self-end"
          : "bg-slate-200 dark:bg-[#101010] self-start"
      } whitespace-pre-wrap w-full max-w-[600px]`}
    >
      <div className={`${isMe ? "justify-end" : "justify-start"} flex gap-2`}>
        <p className="font-bold">{sender}</p>
      </div>

      <div className="p-3 bg-light dark:bg-dark rounded">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const codeString = String(children).replace(/\n$/, "");
              const language = match ? match[1] : "";

              if (match) {
                return (
                  <div className="relative my-3">
                    {/* Language label */}
                    <div className="absolute top-0 right-0 bg-gray-800 text-gray-200 text-xs font-semibold px-2 py-1 rounded-bl-lg rounded-tr-lg capitalize">
                      {language}
                    </div>

                    <SyntaxHighlighter
                      style={oneDark}
                      language={language}
                      PreTag="div"
                      showLineNumbers
                      customStyle={{
                        borderRadius: "0.5rem",
                        paddingTop: "2rem",
                      }}
                      // {...props}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                );
              }

              return (
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded text-sm">
                  {codeString}
                </code>
              );
            },
          }}
        >
          {message}
        </Markdown>
      </div>
    </div>
  );
}
