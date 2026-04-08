import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentinel Security | Professional Security Services",
  description: "Sentinel Security - Professional security guards, surveillance systems, alarm monitoring, and access control solutions. Protecting what matters most.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}