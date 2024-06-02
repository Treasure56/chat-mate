import { create } from "zustand";
export type ThemeMode = "light" | "dark";
export type ThemeState = {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
};

export const useThemeState = create<ThemeState>((set) => {
  return {
    theme: "light",
    setTheme: (theme) => {
      set({ theme });
    },
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
