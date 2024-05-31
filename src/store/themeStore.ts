import { create } from "zustand";
export type ThemeState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useThemeState = create<ThemeState>((set) => {
  return {
    theme: "light",
    toggleTheme: () => {
      set((old) => {
        if (old.theme == "light") return { theme: "dark" };
        return { theme: "light" };
      });
    },
  };
});
