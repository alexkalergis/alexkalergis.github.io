"use client"

import { useState, useEffect, useCallback } from "react" // Added useCallback
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = useCallback(() => {
    // Wrapped in useCallback
    setIsMenuOpen((prev) => !prev)
  }, [])

  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("personal") // Default for non-home pages
      return
    }

    const handleScroll = () => {
      const sections = ["hero", "experience", "projects", "about", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 2 // Adjusted for better active section detection

      // Prioritize hero when at the very top
      if (window.scrollY < 100) {
        setActiveSection("home")
        return
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId === "hero" ? "home" : sectionId)
            return // Found active section
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true }) // Added passive true
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage, pathname]) // Added pathname to re-run if page changes but isHomePage remains true (e.g. query params)

  const handleHomeClick = useCallback(() => {
    // Wrapped in useCallback
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
      // No timeout needed, scroll restoration or useEffect on new page should handle it
    }
    if (isMenuOpen) toggleMenu() // Close menu if open
  }, [isHomePage, router, isMenuOpen, toggleMenu])

  const scrollToSection = useCallback(
    (sectionId: string) => {
      // Wrapped in useCallback
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      if (isMenuOpen) toggleMenu() // Close menu if open
    },
    [isMenuOpen, toggleMenu],
  )

  const navLinkClasses = (section: string) =>
    `text-sm font-medium hover:text-foreground transition-colors relative ${
      activeSection === section
        ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground"
        : "text-muted-foreground"
    }`

  const mobileNavLinkClasses = (section: string) =>
    `text-sm font-medium hover:text-foreground transition-colors text-left ${
      activeSection === section ? "text-foreground" : "text-muted-foreground"
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => {
            if (isHomePage) window.scrollTo({ top: 0, behavior: "smooth" })
            if (isMenuOpen) toggleMenu()
          }}
        >
          <span className="font-bold text-xl font-mono">Alex Kalergis</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {" "}
          {/* Adjusted gap */}
          <button onClick={handleHomeClick} className={navLinkClasses(isHomePage ? "home" : "")}>
            Home
          </button>
          {isHomePage && (
            <>
              <button onClick={() => scrollToSection("experience")} className={navLinkClasses("experience")}>
                Experience
              </button>
              <button onClick={() => scrollToSection("projects")} className={navLinkClasses("projects")}>
                Projects
              </button>
              <button onClick={() => scrollToSection("about")} className={navLinkClasses("about")}>
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className={navLinkClasses("contact")}>
                Contact
              </button>
            </>
          )}
          <Link href="/personal" className={navLinkClasses("personal")}>
            Personal
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <button onClick={handleHomeClick} className={mobileNavLinkClasses(isHomePage ? "home" : "")}>
              Home
            </button>
            {isHomePage && (
              <>
                <button onClick={() => scrollToSection("experience")} className={mobileNavLinkClasses("experience")}>
                  Experience
                </button>
                <button onClick={() => scrollToSection("projects")} className={mobileNavLinkClasses("projects")}>
                  Projects
                </button>
                <button onClick={() => scrollToSection("about")} className={mobileNavLinkClasses("about")}>
                  About
                </button>
                <button onClick={() => scrollToSection("contact")} className={mobileNavLinkClasses("contact")}>
                  Contact
                </button>
              </>
            )}
            <Link href="/personal" className={mobileNavLinkClasses("personal")} onClick={toggleMenu}>
              Personal
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
