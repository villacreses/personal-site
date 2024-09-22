import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { classNames } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mario Villacreses",
  description: "Personal website for Mario Villacreses",
  authors: { name: "Mario Villacreses" },
  keywords: ["portfolio", "software engineer"],
  openGraph: {
    type: "website",
    url: "https://mariovillacreses.com/",
    title: "Mario Villacreses",
    siteName: "Mario Villacreses",
    description: "Personal website for Mario Villacreses",
  },
};

const bodyClassnames = classNames([
  inter.className,
  "flex flex-col h-screen",
  "px-6 m-auto max-w-7xl sm:px-14 md:px-24 lg:px-32",
]);

/**
 * text-lg leading-7  bg-neutral text-neutral-900 dark:bg-neutral-800 dark:text-neutral  scrollbar-thin scrollbar-track-neutral-200 scrollbar-thumb-neutral-400 dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-600
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClassnames}>{children}</body>
    </html>
  );
}
