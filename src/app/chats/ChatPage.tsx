"use client";

import { FormEvent, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";

export type ChatPageProps = {
  userName: string;
};

export default function ChatPage({ userName }: ChatPageProps) {
  const { messages, sendMessage } = useChat({
    // api: "/api/chat",
  });

  // auto-scroll to bottom when new messages appear
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 300);
  }, [messages]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = formData.get("prompt") as string;
    if (!input.trim()) return;
    sendMessage({ text: input });
    e.currentTarget.reset();
  }

  const isThinking =
    messages.length > 0 && messages[messages.length - 1].role === "user";

  return (
    <section className="flex flex-col justify-center items-center app-container py-12 overflow-hidden h-fit">
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center pt-20">
          <h1 className="text-dark dark:text-light text-3xl md:text-6xl font-semibold max-w-[700px] text-center mb-4">
            Welcome, {userName}!
          </h1>
          <p className="text-dark dark:text-light max-w-[700px] text-center mb-8 px-4">
            I&apos;m here to help you with any questions or topics you&apos;d
            like to discuss. Go ahead.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-1 w-full max-w-[600px] pt-6">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.parts
              .map((part) => (part.type === "text" ? part.text : ""))
              .join("")}
            sender={message.role === "user" ? userName : "ai"}
            isMe={message.role === "user"}
          />
        ))}

        {isThinking && (
          <ChatBubble
            key="thinking"
            message="Thinking..."
            sender="ai"
            isMe={false}
          />
        )}
      </div>

      <div className="p-8 dark:text-light" />

      <ChatInput onSubmit={handleSubmit} onChange={() => {}} />
    </section>
  );
}
