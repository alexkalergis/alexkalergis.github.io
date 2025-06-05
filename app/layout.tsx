import type React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} font-mono antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
