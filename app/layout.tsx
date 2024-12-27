import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Profile Analyzer",
  description: "Analyze GitHub profiles and visualize user statistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background flex flex-col`} suppressHydrationWarning>
        <Providers>
          <div className="flex-1">
            <header className="fixed top-4 right-4">
              <ThemeToggle />
            </header>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}