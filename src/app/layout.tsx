import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "skymanlabs",
  description: "Apps and games by skymanlabs.",
  metadataBase: new URL("https://skymanlabs.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
