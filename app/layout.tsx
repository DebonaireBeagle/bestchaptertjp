import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Chapter — Retirement is not the end of the story",
  description:
    "Purpose, connection, confidence, and practical support for the life you want to build next.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
