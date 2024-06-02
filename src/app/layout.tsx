import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const title = "ChatMate";
const description = `your intelligent AI assistant, providing seamless
            conversations, instant support, and insightful interactions powered
            by advanced language models`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://example.com",
    title,
    description,
    siteName: "ai chat",
    images: [
      {
        url: "https://treasure56.vercel.app/images/chatai.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <body
        className={`${inter.className} min-h-screen bg-light dark:bg-dark text-dark dark:text-light `}
      >
        <Navbar />
        {children}
      </body>
    </ThemeProvider>
  );
}
