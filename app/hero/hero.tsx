"use client";

import { Fragment } from "react";
import Link from "next/link";
import "./hero.scss";

const tickerSkills = [
  "React", "TypeScript", "Python", "Figma", "Product Design",
  "Machine Learning", "React Native", "HCI", "UX Design",
  "Reinforcement Learning", "Agile",
];

export function Hero() {
  const doubled = [...tickerSkills, ...tickerSkills];

  return (
    <section className="hero" id="home">

      {/* ── Split: name left, info right ────────────────────────────────── */}
      <div className="hero__split">
        <div className="hero__name-col">
          <h1 className="hero__name">
            <span className="hero__name-line">Alexandros</span>
            <span className="hero__name-line hero__name-line--outlined">Kalergis</span>
          </h1>
        </div>

        <div className="hero__info-col">
          <span className="hero__role">Engineer &amp; Designer</span>
          <p className="hero__description">
            ECE graduate bridging technical depth and design thinking to build
            innovative, human-centered digital products.
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
          <div className="hero__meta">
            <span className="hero__meta-item">Athens, Greece</span>
            <span className="hero__meta-sep" aria-hidden="true">·</span>
            <span className="hero__meta-item">Open to opportunities</span>
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
