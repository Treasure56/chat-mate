" use client ";

import Markdown from "react-markdown";

export type ChatBubbleProps = {
  message: string;
  sender: string;
  isMe: boolean;
};
export default function ChatBubble({ isMe, message, sender }: ChatBubbleProps) {
  return (
    <div className="rounded-lg border p-2 bg-slate-200">
      <div className={`${isMe ? "justify-end " : "justify-start"} flex gap-4`}>
        <p className="font-bold "> {sender}</p>
      </div>
      <div className="p-4 bg-white rounded">
        <Markdown>{message}</Markdown>
      </div>
    </div>
  );
}
