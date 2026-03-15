"use client";

import { Fragment } from "react";
import Link from "next/link";
import "./hero.scss";

const tickerSkills = [
  "Frontend Development", "React", "React Native", "Python", "Claude Code",
  "Human-Computer Interaction", "Product Design", "UX Design", "Figma", 
  "Machine Learning", "Agile", 
];

export function Hero() {
  const doubled = [...tickerSkills, ...tickerSkills];

  return (
    <section className="hero" id="home">

      {/* ── Split: name left, info right ────────────────────────────────── */}
      <div className="hero__split">
        <div className="hero__name-col">
          <h1 className="hero__name">
            <span className="hero__name-line">Alex</span>
            <span className="hero__name-line hero__name-line--outlined">Kalergis</span>
          </h1>
        </div>

        <div className="hero__info-col">
          <span className="hero__role">Engineer &amp; Designer</span>
          <p className="hero__description">
            Exploring the intersection of Technology, Design, and Human-Computer Interaction.
            I bring a unique combination of technical background and design-thinking skills.
          </p>
          <div className="hero__actions">
            <Link
              href="/files/Kalergis_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Kalergis_CV.pdf"
              className="hero__btn hero__btn--primary"
            >
              Download CV
            </Link>
            <a href="#experience" className="hero__btn hero__btn--ghost">
              View Work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Skills ticker ───────────────────────────────────────────────── */}
      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          {doubled.map((skill, i) => (
            <Fragment key={i}>
              <span className="hero__ticker-item">{skill}</span>
              <span className="hero__ticker-sep">·</span>
            </Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}
