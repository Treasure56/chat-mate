"use client";

import { create } from "zustand";
type ThemeMode = "light" | "dark";
export type ThemeState = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

export const useThemeState = create<ThemeState>((set) => {
  return {
    theme:
      (localStorage && (localStorage.getItem("theme") as ThemeMode)) ?? "light",
    toggleTheme: () => {
      set((old) => {
        let t: { theme: ThemeMode };
        if (old.theme == "light") t = { theme: "dark" };
        else t = { theme: "light" };
        localStorage.setItem("theme", t.theme);
        return t;
      });
    },
  };
});
