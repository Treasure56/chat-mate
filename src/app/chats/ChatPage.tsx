"use client";

import { RiSendPlaneFill } from "react-icons/ri";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import { useChat } from "ai/react";
import { useEffect } from "react";

export type ChatPageProps = {
  userName: string;
};

export default function ChatPage({ userName }: ChatPageProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/ai",
  });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 500);
  }, [messages]);

  return (
    <section className="flex flex-col justify-center items-center app-container py-12  overflow-hidden h-fit">
      {messages.length == 0 && (
        <div className=" flex flex-col items-center justify-center pt-20">
          <h1 className="text-dark dark:text-light text-2xl md:text-6xl font-semibold max-w-[700px]  text-center mb-4">
            Welcome to ChatMate, {userName}!
          </h1>
          <p className="text-dark dark:text-light max-w-[700px] text-center mb-8 px-4">
            I&apos;m here to help you with any questions or topics you&apos;d
            like to discuss. Go ahead
          </p>
        </div>
      )}
      <div className=" flex flex-col gap-1 w-full max-w-[600px] pt-6">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.content}
            sender={message.role == "user" ? userName : "ai"}
            isMe={message.role == "user"}
          />
        ))}
      </div>
      <div className="p-8 dark:text-light"></div>
      <ChatInput onSubmit={handleSubmit} onChange={handleInputChange} />
    </section>
  );
}
