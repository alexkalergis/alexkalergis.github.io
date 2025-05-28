"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isHomePage = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="/images/profile-photo.png" alt="Alex Kalergis" fill className="object-cover" />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/" ? "text-primary" : ""
            }`}
          >
            Home
          </Link>
          {isHomePage && (
            <>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Experience
              </Link>
              <Link
                href="#education"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Education
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Projects
              </Link>
              <Link
                href="#volunteering"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#volunteering")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Volunteering
              </Link>
            </>
          )}
          <Link
            href="/personal"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/personal" ? "text-primary" : ""
            }`}
          >
            Personal
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              pathname === "/contact" ? "text-primary" : ""
            }`}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link
              href="/files/alex-kalergis-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Alex_Kalergis_CV.pdf"
              className="inline-flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === "/" ? "text-primary" : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            {isHomePage && (
              <>
                <Link
                  href="#about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  About
                </Link>
                <Link
                  href="#experience"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  Experience
                </Link>
                <Link
                  href="#education"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#education")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  Education
                </Link>
                <Link
                  href="#skills"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  Projects
                </Link>
                <Link
                  href="#volunteering"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#volunteering")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  Volunteering
                </Link>
              </>
            )}
            <Link
              href="/personal"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === "/personal" ? "text-primary" : ""
              }`}
              onClick={toggleMenu}
            >
              Personal
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === "/contact" ? "text-primary" : ""
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button variant="outline" className="w-full mt-2" asChild>
              <Link
                href="/files/alex-kalergis-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Alex_Kalergis_CV.pdf"
                className="inline-flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Resume
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
