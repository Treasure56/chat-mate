import { ChatRequestOptions } from "ai";
import { ChangeEvent, FormEvent } from "react";
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
  return (
    <div className="bottom-0 h-[100px] bg-gradient-to-t from-white to-transparent fixed app-container w-full flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center w-full max-w-[600px] h-fit  relative"
      >
        <textarea
          onChange={onChange}
          rows={1}
          className="input p-4  shadow mb-4 w-full "
          placeholder="Type your message here..."
        />
        <button className=" p-4 absolute top-0 right-0">
          <RiSendPlaneFill className="" />
        </button>
      </form>
    </div>
  );
}
