"use client";

import { RiSendPlaneFill } from "react-icons/ri";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import { useChat } from "ai/react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/ai",
  });

  return (
    <section className="flex flex-col justify-center items-center app-container py-12  overflow-hidden">
      {messages.length == 0 && (
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-dark dark:text-light text-6xl font-semibold max-w-[450px] text-center mb-4">
            Your Personal AI Advisor
          </h1>
          <p className="text-dark dark:text-light max-w-[700px] text-center mb-8 px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure
            mollitia aliquid. Soluta ex quaerat quibusdam sapiente alias
            repudiandae ea nesciunt nemo, voluptate maxime.
          </p>
        </div>
      )}
      <div className=" flex flex-col gap-1 w-full max-w-[600px]">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.content}
            sender={message.role == "user" ? "userName" : "ai"}
            isMe={message.role == "user"}
          />
        ))}
      </div>
      <div className="p-8"></div>
      <ChatInput onSubmit={handleSubmit} onChange={handleInputChange} />
    </section>
  );
}
