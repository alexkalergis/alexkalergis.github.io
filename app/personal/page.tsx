"use client"

import { useEffect } from "react"
import { HeaderWrapper } from "@/components/header-wrapper"
import { Footer } from "@/components/footer"
import { Personal } from "@/components/personal"
import { Hobbies } from "@/components/hobbies"

export default function PersonalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWrapper />
      <main className="pt-16 flex-grow">
        <Personal />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
