"use client"

import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="py-32 md:py-40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold font-mono leading-tight">Alex Kalergis</h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                  Software Engineer & Product Designer
                </p>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed text-justify">
                Crafting innovative solutions at the intersection of technology and design. Specialized in AI, machine
                learning, and user-centered product development with a focus on creating meaningful digital experiences
                that solve real-world problems.
              </p>

              {/* Download CV Button */}
              <div className="pt-4">
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
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border">
              <Image src="/images/profile-photo.png" alt="Alex Kalergis" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
