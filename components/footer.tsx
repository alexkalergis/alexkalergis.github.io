"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">Alex Kalergis</h3>
            <p className="text-muted-foreground">
              Software Engineer & Product Designer with expertise in AI, machine learning, and UX design.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/personal" className="text-muted-foreground hover:text-primary transition-colors">
                Personal
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              {isHomePage && (
                <>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    About
                  </Link>
                  <Link
                    href="#experience"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Experience
                  </Link>
                  <Link
                    href="#education"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Education
                  </Link>
                  <Link
                    href="#skills"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Skills
                  </Link>
                  <Link
                    href="#projects"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    href="#volunteering"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector("#volunteering")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Volunteering
                  </Link>
                </>
              )}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold">Connect</h3>
            <div className="flex gap-4">
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
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Alex Kalergis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
