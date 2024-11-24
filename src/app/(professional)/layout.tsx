import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { classNames } from "@/lib/utils";
import TopNavbar from "@/components/TopNavbar";
import PageFooter from "@/components/PageFooter";
import { DarkModeProvider } from "@/hooks";

import "./aria.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mario Villacreses",
  description: "Personal website for Mario Villacreses",
  authors: { name: "Mario Villacreses" },
  keywords: ["portfolio", "software engineer"],
  generator: "Next.js",
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
  "m-auto max-w-7xl",
  "px-4 xxs:px-6 sm:px-14 md:px-24 lg:px-32",
]);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClassnames}>
        <DarkModeProvider>
          <TopNavbar />
          {children}
          <PageFooter />
        </DarkModeProvider>
      </body>
    </html>
  );
}
