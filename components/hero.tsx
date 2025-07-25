"use client"

import { useState, useEffect } from "react" // Added useRef
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"
import { TypewriterText } from "./typewriter-text"

export function Hero() {
  const [nameComplete, setNameComplete] = useState(false)
  const [subtitleComplete, setSubtitleComplete] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setNameComplete(false)
    setSubtitleComplete(false)
    setKey((prev) => prev + 1)
  }, [])

  const handleNameAnimationComplete = () => {
    setNameComplete(true)
  }

  const handleSubtitleAnimationComplete = () => {
    setSubtitleComplete(true)
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
                  key={`name-${key}`}
                  text="Alex Kalergis"
                  delay={120}
                  cursorDuration={1000}
                  onComplete={handleNameAnimationComplete}
                />
              </h1>
              <div
                className={`min-h-[1.6em] transition-opacity duration-500 ${nameComplete ? "opacity-100" : "opacity-0"}`}
              >
                {nameComplete && (
                  <p className="text-lg md:text-2xl text-muted-foreground font-normal">
                    <TypewriterText
                      key={`subtitle-${key}`}
                      text="Engineer | Designer"
                      delay={80}
                      cursorDuration={1000}
                      onComplete={handleSubtitleAnimationComplete}
                    />
                  </p>
                )}
              </div>
            </div>
            <div
              className={`transition-opacity duration-500 ${subtitleComplete ? "opacity-100 delay-300" : "opacity-0"}`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed pt-2 md:text-lg text-justify" style={{ textJustify: 'inter-word' }}>
                Electrical &amp; Computer Engineering graduate with an interest in Human-Computer Interaction and Design
                Thinking, bringing a unique combination on creating innovative solutions that are functional, creative 
                and human-centered.
              </p>
            </div>
            {/* Download CV Button */}
            <div
              className={`pt-2 transition-opacity duration-500 ${subtitleComplete ? "opacity-100 delay-500" : "opacity-0"}`}
            >
              <Button variant="outline" className="rounded-md px-6 bg-transparent" asChild>
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

          {/* Removed Hero Image from here */}
        </div>
      </div>
    </section>
  )
}
