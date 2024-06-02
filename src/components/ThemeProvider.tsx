"use client";

import { ThemeMode, useThemeState } from "@/store/themeStore";
import { ReactNode, useLayoutEffect } from "react";

export type ThemeProviderProps = {
  children: ReactNode;
};
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, setTheme } = useThemeState();
  useLayoutEffect(() => {
    setTheme((localStorage.getItem("theme") ?? "light") as ThemeMode);
  }, []);
  return (
    <html lang="en" className={theme}>
      {children}
    </html>
  );
}
