"use client";

import { useThemeState } from "@/store/themeStore";
import { ReactNode } from "react";

export type ThemeProviderProps = {
  children: ReactNode;
};
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeState();
  return (
    <html lang="en" className={theme}>
      {children}
    </html>
  );
}
