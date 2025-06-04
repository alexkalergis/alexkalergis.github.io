"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container py-24 md:py-32 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
          Hi, I'm Alex Kalergis
          <span className="block text-primary">Software Engineer & Product Designer</span>
        </h1>
        <p className="text-xl text-muted-foreground font-mono">
          Electrical & Computer Engineering graduate with expertise in AI, machine learning, and product design.
          Passionate about creating innovative solutions that combine technical excellence with exceptional user
          experience.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/contact" className="inline-flex items-center gap-2 font-mono">
              Let's Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="#projects"
              className="font-mono"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View My Work
            </Link>
          </Button>
        </div>
        <div className="flex gap-4 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/alexkalergis" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/alexandros-kalergis/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:kalergisalex@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
          <Image src="/images/profile-photo.png" alt="Alex Kalergis" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  )
}
