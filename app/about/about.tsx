"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import "./about.scss";

const drawings = [
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8711.webp",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8712.webp",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8714.webp",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8715.webp",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8716.webp",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8717.webp",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8718.webp",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8726.webp",
];

const inspiration = [
  { title: "IDEO", meta: "ideo.com", href: "https://www.ideo.com" },
  { title: "Interaction Design Foundation", meta: "interaction-design.org", href: "https://www.interaction-design.org" },
  { title: "Stanford d.school", meta: "dschool.stanford.edu", href: "https://dschool.stanford.edu" },
  { title: "Harvard Graduate School of Design", meta: "gsd.harvard.edu", href: "https://www.gsd.harvard.edu" },
  { title: "MIT Media Lab", meta: "media.mit.edu", href: "https://www.media.mit.edu" },
];

const videos = [
  { title: "The first secret of great design", meta: "Tony Fadell, TED", href: "https://youtu.be/9uOMectkCCs" },
  { title: "How product design can change the world", meta: "Christiaan Maats, TED", href: "https://youtu.be/ZqeA_psKn2E" },
];

const reads = [
  { title: "Software designers must abandon their roles as the custodians of libraries, logic and grids", meta: "Nick Foster, Dezeen", href: "https://www.dezeen.com/2026/03/03/software-design-ai-nick-foster-opinion/" },
  { title: "Aesthetics and the Art of Engineering", meta: "Per Boelskifte, ResearchGate", href: "https://www.researchgate.net/publication/276314506_Aesthetics_and_the_Art_of_Engineering" },
];


export function About() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + drawings.length) % drawings.length : null), []);
  const next = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % drawings.length : null), []);
  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next, close]);

  return (
    <>
    <section id="about" className="about" data-section>
      <div className="about__container">
        <div className="about__left">
          <span className="about__num" aria-hidden="true">04</span>
          <h2 className="about__title">About</h2>
        </div>

        <div className="about__right">
          <div className="about__group about__group--bio">
            <span className="about__group-label">Bio</span>
          <div className="about__text-block">
            <p className="about__text">
              My journey began with a fascination for technology and the ways it
              can improve people&apos;s lives. After studying Electrical and Computer
              Engineering, I discovered a passion for combining engineering, design,
              and creativity to build meaningful digital experiences. I enjoy working
              at the intersection of technology and human needs, turning complex
              problems into simple, thoughtful solutions. When I&apos;m not designing or
              building products, I love traveling, exploring architecture, enjoying
              specialty coffee, being in nature, and learning about psychology,
              philosophy, and the creative process.
            </p>
          </div>
          </div>

          {/* ── Personal ───────────────────────────────────────────────────── */}
          <div className="about__personal">

            {/* Interests */}
            <div className="about__group">
              <span className="about__group-label">Interests</span>
              <div className="about__drawings">
                {drawings.map((src, i) => (
                  <button key={i} className="about__drawing-frame" onClick={() => setLightboxIndex(i)}>
                    <Image
                      src={src}
                      alt={`Drawing ${i + 1}`}
                      fill
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
              <ul className="about__reads-list">
                <li>
                  <Link
                    href="https://500px.com/p/alexkalergis?view=photos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about__reads-item"
                  >
                    <span className="about__reads-title">Photography</span>
                    <span className="about__reads-meta">500px.com</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Inspiration */}
            <div className="about__group">
              <span className="about__group-label">Inspiration</span>
              <ul className="about__reads-list">
                {[...inspiration, ...videos, ...reads].map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about__reads-item"
                    >
                      <span className="about__reads-title">{item.title}</span>
                      <span className="about__reads-meta">{item.meta}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Lightbox */}
    {lightboxIndex !== null && (
      <div className="about__lightbox" onClick={close}>
        <button className="about__lightbox-close" onClick={close} aria-label="Close">✕</button>

        <button className="about__lightbox-nav about__lightbox-nav--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">←</button>

        <div className="about__lightbox-stage" onClick={(e) => e.stopPropagation()}>
          <div className="about__lightbox-inner">
            <Image
              src={drawings[lightboxIndex]}
              alt={`Drawing ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <div className="about__lightbox-footer">
            <span className="about__lightbox-count">{lightboxIndex + 1} / {drawings.length}</span>
            <div className="about__lightbox-dots">
              {drawings.map((_, i) => (
                <button
                  key={i}
                  className={`about__lightbox-dot${i === lightboxIndex ? " about__lightbox-dot--active" : ""}`}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Go to drawing ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <button className="about__lightbox-nav about__lightbox-nav--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">→</button>
      </div>
    )}
    </>
  );
}
