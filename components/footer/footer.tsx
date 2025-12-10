"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__text">
          <span> Made with </span>
          <Heart className="footer__heart" />
          <span> by Alex Kalergis using </span>
          <span />
          <Link
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Figma
          </Link>
          <span> and </span>
          <Link
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            React
          </Link>
          <span> | &copy; {new Date().getFullYear()} All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
