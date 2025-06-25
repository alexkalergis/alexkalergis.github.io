"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TypewriterText } from "./typewriter-text"

export function Hero() {
  const [nameComplete, setNameComplete] = useState(false)
  const [key, setKey] = useState(0) // Force re-render of TypewriterText

  useEffect(() => {
    // Reset animation on every page load/reload
    setNameComplete(false)
    setKey((prev) => prev + 1) // Force TypewriterText to remount
  }, [])

  const handleAnimationComplete = () => {
    setNameComplete(true)
  }

  return (
    <section id="hero" className="py-32 md:py-40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold font-mono leading-tight min-h-[1.2em]">
                <TypewriterText
                  key={key} // Force remount on page reload
                  text="Alex Kalergis"
                  delay={120}
                  cursorDuration={1500}
                  skipAnimation={false}
                  onComplete={handleAnimationComplete}
                />
              </h1>
              <div className={`transition-opacity duration-500 ${nameComplete ? "opacity-100" : "opacity-0"}`}>
                <p className="text-lg text-muted-foreground whitespace-nowrap md:text-2xl font-normal">
                  Software Engineer & Product Designer
                </p>
              </div>
            </div>
            <div className={`transition-opacity duration-500 ${nameComplete ? "opacity-100 delay-300" : "opacity-0"}`}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify pt-2">
                Crafting innovative solutions at the intersection of technology and design. Specialized in AI, machine
                learning, and user-centered product development with a focus on creating meaningful digital experiences
                that solve real-world problems.
              </p>
            </div>
            {/* Download CV Button */}
            <div
              className={`pt-2 transition-opacity duration-500 ${nameComplete ? "opacity-100 delay-500" : "opacity-0"}`}
            >
              <Button variant="outline" className="rounded-md px-6" asChild>
                <Link
                  href="/files/Alexandros_Kalergis_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Alexandros_Kalergis_CV.pdf"
                  className="inline-flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative w-full aspect-square max-w-lg mx-auto transition-opacity duration-500 ${nameComplete ? "opacity-100 delay-700" : "opacity-0"}`}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border">
              <Image src="/images/profile-photo.png" alt="Alex Kalergis" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
