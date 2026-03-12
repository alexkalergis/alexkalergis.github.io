"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import "./header.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsMenuOpen((p) => !p), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const isHome = pathname === "/";

  return (
    <header className={`header${isScrolled ? " header--scrolled" : ""}`}>
      <div className="header__inner">
        <Link href="/" className="header__logo" onClick={closeMenu}>
          Alex Kalergis
        </Link>

        <nav className="header__nav" aria-label="Primary navigation">
          {isHome ? (
            <>
              <a href="#experience" className="header__link">Experience</a>
              <a href="#projects" className="header__link">Projects</a>
              <a href="#education" className="header__link">Education</a>
              <a href="#about" className="header__link">About</a>
              <a href="#contact" className="header__link">Contact</a>
            </>
          ) : (
            <>
              <Link href="/" className="header__link">Home</Link>
              <Link href="/professional" className="header__link">Professional</Link>
              <Link href="/personal" className="header__link">Personal</Link>
            </>
          )}
        </nav>

        <div className="header__actions">
          <button
            className="header__menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="header__mobile-nav">
          {isHome ? (
            <>
              <a href="#experience" className="header__mobile-link" onClick={closeMenu}>Experience</a>
              <a href="#projects" className="header__mobile-link" onClick={closeMenu}>Projects</a>
              <a href="#education" className="header__mobile-link" onClick={closeMenu}>Education</a>
              <a href="#about" className="header__mobile-link" onClick={closeMenu}>About</a>
              <a href="#contact" className="header__mobile-link" onClick={closeMenu}>Contact</a>
            </>
          ) : (
            <>
              <Link href="/" className="header__mobile-link" onClick={closeMenu}>Home</Link>
              <Link href="/professional" className="header__mobile-link" onClick={closeMenu}>Professional</Link>
              <Link href="/personal" className="header__mobile-link" onClick={closeMenu}>Personal</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
