import type React from "react" // Kept for children type
import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"
// Removed ThemeProvider import as it's not used directly here, assuming it's in a child component or page if needed. If it was meant for global context, it should be added back. For now, assuming it's handled by individual pages or a root component within children.

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alex Kalergis - Software Engineer & Product Designer",
  description: "Personal portfolio of Alex Kalergis, Software Engineer & Product Designer",
  icons: {
    icon: "/images/profile-photo.png",
  },
  generator: "v0.dev", // This is fine, added by v0
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${roboto.variable} ${robotoMono.variable} font-mono antialiased`}>{children}</body>
    </html>
  )
}
