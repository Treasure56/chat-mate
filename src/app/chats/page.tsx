import { getUserName } from "@/actions/getUserName";
import ChatPage from "./ChatPage";

export default async function Page() {
  const userName = await getUserName();
  return (
    <div className=" overflow-hidden bg-light dark:bg-dark">
      <ChatPage userName={userName} />
    </div>
  );
}
