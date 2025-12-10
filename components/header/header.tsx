"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Normalize pathname by removing trailing slash for comparison
  const normalizedPath =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const navLinkClasses = (isActive: boolean) =>
    `text-sm font-medium hover:text-foreground transition-colors relative pb-1 ${
      isActive
        ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground"
        : "text-muted-foreground"
    }`;

  const mobileNavLinkClasses = (isActive: boolean) =>
    `text-sm font-medium hover:text-foreground transition-colors text-left ${
      isActive ? "text-foreground" : "text-muted-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center">
        <nav className="hidden md:flex gap-6">
          <Link href="/" className={navLinkClasses(normalizedPath === "/")}>
            Home Page
          </Link>
          <Link
            href="/professional"
            className={navLinkClasses(normalizedPath === "/professional")}
          >
            Professional Library
          </Link>
          <Link
            href="/personal"
            className={navLinkClasses(normalizedPath === "/personal")}
          >
            Personal Library
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className={mobileNavLinkClasses(normalizedPath === "/")}
              onClick={toggleMenu}
            >
              Home Page
            </Link>
            <Link
              href="/professional"
              className={mobileNavLinkClasses(
                normalizedPath === "/professional"
              )}
              onClick={toggleMenu}
            >
              Professional Library
            </Link>
            <Link
              href="/personal"
              className={mobileNavLinkClasses(normalizedPath === "/personal")}
              onClick={toggleMenu}
            >
              Personal Library
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
