"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contact from Portfolio Website")
    const body = encodeURIComponent("Hi Alex,\n\nI'd like to get in touch with you regarding...\n\nBest regards,")
    window.open(`mailto:kalergisalex@gmail.com?subject=${subject}&body=${body}`, "_blank")
  }

  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2 font-mono">Alex Kalergis</h3>
            <p className="text-muted-foreground">Software Engineer & Product Designer</p>
          </div>

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
            <Button variant="ghost" size="icon" onClick={handleEmailClick}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Alex Kalergis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
