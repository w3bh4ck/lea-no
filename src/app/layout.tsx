import type { Metadata } from "next";
import "./globals.css";
import figTree from "./font";

export const metadata: Metadata = {
  title: "Nolea | Search",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figTree.variable} font-light antialiased`}>{children}</body>
    </html>
  );
}