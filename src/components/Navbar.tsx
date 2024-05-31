import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="flex justify-between app-container fixed top-0 left-0 w-full py-4">
      <Link href="/" className=" font-extrabold text-2xl  ">
        ChatMate
      </Link>
      <ThemeToggle />
    </div>
  );
}
