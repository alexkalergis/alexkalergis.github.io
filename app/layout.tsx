import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.scss";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollAnimations } from "@/components/scroll-animations";

const siteUrl = "https://alexkalergis.github.io";
const title = "Alex Kalergis - Software Engineer & Product Designer";
const description =
  "Personal portfolio of Alex Kalergis, Software Engineer & Product Designer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/images/profile-photo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Alex Kalergis",
    images: [
      {
        url: "/images/profile-photo.png",
        width: 1200,
        height: 630,
        alt: "Alex Kalergis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/profile-photo.png"],
  },
  other: {
    "referrer": "strict-origin-when-cross-origin",
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
