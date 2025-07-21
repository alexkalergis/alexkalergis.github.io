"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
const Header = dynamic(() => import("@/components/header").then((m) => m.Header), { ssr: false })
import { Footer } from "@/components/footer"
import { Personal } from "@/components/personal"
import { Hobbies } from "@/components/hobbies"

export default function PersonalPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {" "}
      {/* Added flex flex-col */}
      <Header />
      <main className="pt-16 flex-grow">
        {" "}
        {/* Added flex-grow */}
        <Personal />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
