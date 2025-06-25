"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("personal")
      return
    }

    const handleScroll = () => {
      const sections = ["hero", "experience", "projects", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      if (window.scrollY < 50) {
        setActiveSection("home")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === "hero" ? "home" : section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const handleHomeClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
      // Add a small delay to ensure navigation completes, then scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl font-mono">Alex Kalergis</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          <button
            onClick={handleHomeClick}
            className={`text-sm font-medium hover:text-foreground transition-colors relative ${
              (isHomePage && activeSection === "home") || (!isHomePage && false)
                ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground"
                : "text-muted-foreground"
            }`}
          >
            Home
          </button>
          {isHomePage && (
            <>
              <button
                onClick={() => scrollToSection("experience")}
                className={`text-sm font-medium hover:text-foreground transition-colors relative ${
                  activeSection === "experience"
                    ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-sm font-medium hover:text-foreground transition-colors relative ${
                  activeSection === "projects"
                    ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm font-medium hover:text-foreground transition-colors relative ${
                  activeSection === "about"
                    ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground"
                    : "text-muted-foreground"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-sm font-medium hover:text-foreground transition-colors relative ${
                  activeSection === "contact"
                    ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Contact
              </button>
            </>
          )}
          <Link
            href="/personal"
            className={`text-sm font-medium hover:text-foreground transition-colors relative ${
              pathname === "/personal"
                ? "text-foreground after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground"
                : "text-muted-foreground"
            }`}
          >
            Personal
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => {
                handleHomeClick()
                toggleMenu()
              }}
              className={`text-sm font-medium hover:text-foreground transition-colors text-left ${
                (isHomePage && activeSection === "home") || (!isHomePage && false)
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Home
            </button>
            {isHomePage && (
              <>
                <button
                  onClick={() => {
                    scrollToSection("experience")
                    toggleMenu()
                  }}
                  className={`text-sm font-medium hover:text-foreground transition-colors text-left ${
                    activeSection === "experience" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => {
                    scrollToSection("projects")
                    toggleMenu()
                  }}
                  className={`text-sm font-medium hover:text-foreground transition-colors text-left ${
                    activeSection === "projects" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about")
                    toggleMenu()
                  }}
                  className={`text-sm font-medium hover:text-foreground transition-colors text-left ${
                    activeSection === "about" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact")
                    toggleMenu()
                  }}
                  className={`text-sm font-medium hover:text-foreground transition-colors text-left ${
                    activeSection === "contact" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Contact
                </button>
              </>
            )}
            <Link
              href="/personal"
              className={`text-sm font-medium hover:text-foreground transition-colors ${
                pathname === "/personal" ? "text-foreground" : "text-muted-foreground"
              }`}
              onClick={toggleMenu}
            >
              Personal
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
