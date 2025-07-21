"use client"

import { useEffect } from "react"
import { InteractiveHeader } from "@/components/interactive-header"
import { Footer } from "@/components/footer"
import { Personal } from "@/components/personal"
import { Hobbies } from "@/components/hobbies"

export default function PersonalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <InteractiveHeader />
      <main className="pt-16 flex-grow">
        <Personal />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
