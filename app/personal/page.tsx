"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Personal } from "@/components/personal"
import { Hobbies } from "@/components/hobbies"

export default function PersonalPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Personal />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
