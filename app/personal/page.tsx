"use client"

import { useEffect } from "react"
import HeaderShell from "@/components/header-shell"
import HeaderClient from "@/components/header-client"
import { Footer } from "@/components/footer"
import { Personal } from "@/components/personal"
import { Hobbies } from "@/components/hobbies"

export default function PersonalPage() {
  /* scroll reset */
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderShell />
      <HeaderClient />
      <main className="pt-16 flex-grow">
        <Personal />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
