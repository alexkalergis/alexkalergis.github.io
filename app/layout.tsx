import type React from "react";
import type { Metadata } from "next";
import "./globals.scss";
import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "Alex Kalergis - Software Engineer & Product Designer",
  description:
    "Personal portfolio of Alex Kalergis, Software Engineer & Product Designer",
  icons: {
    icon: "/images/profile-photo.png",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
