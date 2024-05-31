import { ChatRequestOptions } from "ai";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
export type ChatInputProps = {
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (
    e: FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => void;
};

export default function ChatInput({ onChange, onSubmit }: ChatInputProps) {
  function handleChange(p: any) {
    onChange(p);
    if (p.target.value.toString().endsWith("\n")) {
      formRef.current?.requestSubmit();
      ref.current!.value = "";
    }
  }
  const ref = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="bottom-0 h-[100px] bg-gradient-to-t from-light to-transparent fixed app-container w-full flex justify-center items-center dark:from-dark">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center w-full max-w-[600px] h-fit  relative"
        ref={formRef}
      >
        <textarea
          onChange={handleChange}
          rows={1}
          ref={ref}
          className="input p-4  shadow mb-4 w-full dark:bg-dark  "
          placeholder="Type your message here..."
        />
        <button className=" p-4 absolute top-0 right-0">
          <RiSendPlaneFill className="" />
        </button>
      </form>
    </div>
  );
}
