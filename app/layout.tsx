import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.scss";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollAnimations } from "@/components/scroll-animations";

export const metadata: Metadata = {
  title: "Alex Kalergis - Software Engineer & Product Designer",
  description:
    "Personal portfolio of Alex Kalergis, Software Engineer & Product Designer",
  icons: {
    icon: "/images/profile-photo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <CustomCursor />
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
