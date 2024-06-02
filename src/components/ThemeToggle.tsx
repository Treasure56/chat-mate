"use client";

import { useThemeState } from "@/store/themeStore";
import { FaRegMoon } from "react-icons/fa6";
import { LuSunMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const { toggleTheme, theme } = useThemeState();
  return (
    <button
      className="inline-flex p-2 rounded-md border text-xl dark:text-light"
      onClick={() => {
        toggleTheme();
      }}
    >
      {theme == "light" ? <FaRegMoon /> : <LuSunMoon />}
    </button>
  );
}
