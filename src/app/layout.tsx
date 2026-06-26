import type { Metadata } from "next";
import { Background } from "@/components/Background";
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
      <body>
        <Background />
        {children}
      </body>
    </html>
  );
}
