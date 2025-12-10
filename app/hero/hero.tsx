"use client";

import Link from "next/link";
import Image from "next/image";
import "./hero.scss";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__bio">
          <h1 className="hero__name">Alex Kalergis</h1>
          <h2 className="hero__subtitle">Engineer | Designer</h2>
          <p className="hero__description">
            Electrical & Computer Engineering graduate with an interest in Human
            Computer Interaction and Design Thinking, bringing a unique
            combination on creating innovative solutions that are functional,
            creative and human centered.
          </p>
          <Link
            href="/files/Kalergis_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Kalergis_CV.pdf"
            className="hero__button"
          >
            <span className="hero__button-text">Download Resume</span>
          </Link>
        </div>
        <div className="hero__image">
          <Image
            src="/placeholder.svg"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
