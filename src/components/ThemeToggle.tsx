"use client";

import { FaRegMoon } from "react-icons/fa6";
import { LuSunMoon } from "react-icons/lu";

export default function ThemeToggle() {
  return (
    <button className="inline-flex p-2 rounded-md border text-xl dark:text-light">
      <FaRegMoon />
      <LuSunMoon />
    </button>
  );
}
