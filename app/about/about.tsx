"use client";

import Image from "next/image";
import Link from "next/link";
import "./about.scss";

const skills = [
  "React", "TypeScript", "React Native", "Python", "Figma",
  "UX Design", "Product Design", "Machine Learning", "HCI",
  "Reinforcement Learning", "Agile",
];

const drawings = [
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8711.jpeg",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8712.jpeg",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8714.jpeg",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8715.jpeg",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8716.jpeg",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8717.jpeg",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8718.jpeg",
  "/images/PersonalLibrary/Hobbies/Drawing/IMG_8726.jpeg",
];

const reads = [
  { title: "Aesthetics and the Art of Engineering", meta: "Per Boelskifte, 2014", href: "https://www.researchgate.net/publication/276314506_Aesthetics_and_the_Art_of_Engineering" },
  { title: "The first secret of great design", meta: "Tony Fadell — TED", href: "https://youtu.be/9uOMectkCCs" },
  { title: "How product design can change the world", meta: "Christiaan Maats — TED", href: "https://youtu.be/ZqeA_psKn2E" },
  { title: "IDEO", meta: "ideo.com", href: "https://www.ideo.com" },
  { title: "Interaction Design Foundation", meta: "interaction-design.org", href: "https://www.interaction-design.org" },
];

export function About() {
  return (
    <section id="about" className="about" data-section>
      <div className="about__container">
        <div className="about__left">
          <span className="about__num" aria-hidden="true">04</span>
          <h2 className="about__title">About</h2>
        </div>

        <div className="about__right">
          <p className="about__pullquote">
            Engineering rigour meets user-centered design — from production code
            to end-to-end product experiences.
          </p>

          <div className="about__text-block">
            <p className="about__text">
              My path into technology began with a degree in Electrical &amp;
              Computer Engineering from the University of Patras. My academic
              focus on Cyber-Physical Systems immersed me in Artificial
              Intelligence, Machine Learning, and Human-Computer Interaction.
            </p>
            <p className="about__text">
              I specialise in bridging engineering rigour with user-centered
              design — from building production-grade React applications to
              crafting end-to-end product experiences in Figma. I believe the
              best digital products emerge where technical depth meets genuine
              empathy for the people using them.
            </p>
          </div>

          <div className="about__skills">
            {skills.map((skill) => (
              <span key={skill} className="about__skill">
                {skill}
              </span>
            ))}
          </div>

          {/* ── Personal ───────────────────────────────────────────────────── */}
          <div className="about__personal">
            <span className="about__personal-eyebrow">Personal</span>

            {/* Drawings grid */}
            <div className="about__drawings">
              {drawings.map((src, i) => (
                <div key={i} className="about__drawing-frame">
                  <Image
                    src={src}
                    alt={`Drawing ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Photography */}
            <Link
              href="https://500px.com/p/alexkalergis?view=photos"
              target="_blank"
              rel="noopener noreferrer"
              className="about__photography-link"
            >
              Photography on 500px <span aria-hidden="true">↗</span>
            </Link>

            {/* Reads */}
            <div className="about__reads">
              <span className="about__reads-label">Reads &amp; Watches</span>
              <ul className="about__reads-list">
                {reads.map((item) => (
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
  );
}
