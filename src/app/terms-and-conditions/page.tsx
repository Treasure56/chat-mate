export default function Page() {
  return (
    <div className="app-container pt-20 flex flex-col items-center gap-5">
      <p className="font-bold text-2xl text-dark dark:text-light">
        Terms and Condition{" "}
      </p>
      <p className="font-semibold text xl">
        This app relies on Google&apos;s technology to provide responses and
        complete tasks.
      </p>
      <ul>
        <li className=" list-disc">
          The information you see here comes from Google&apos;s Gemini API.
        </li>
        <li className=" list-disc">
          To give you the best answers, we process your questions and chats
          through this API.
        </li>
      </ul>
      <p className="text-xl font-semibold">
        Remember, be mindful of what you type.
      </p>
    </div>
  );
}
