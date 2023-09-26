import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./exportfile";
import TopNav from "./components/topnav";
import MobileNav from "./components/mobilenav";

export const metadata: Metadata = {
  title: "gorealtor",
  description: "Real Estate Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="text-dark container mx-auto">
          <TopNav />
          <MobileNav />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
