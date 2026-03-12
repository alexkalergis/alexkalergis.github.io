"use client";

import Image from "next/image";
import Link from "next/link";
import "./projects.scss";

const projects = [
  {
    id: 1,
    title: "maMEDS",
    year: "2025–present",
    type: "Product Design & Engineering",
    image: "/images/Projects/maMEDS.png",
    keywords: "React · Figma · React Native",
  },
  {
    id: 2,
    title: "ASSETS",
    year: "2025",
    type: "Product Design & Engineering",
    image: "/images/Projects/Assets.png",
    keywords: "React · Figma",
  },
  {
    id: 3,
    title: "Hapi",
    year: "2025",
    type: "Product Design & Engineering",
    image: "/images/Projects/Hapi.png",
    keywords: "Lean UX · React · Figma",
  },
  {
    id: 4,
    title: "Busifinder",
    year: "2024",
    type: "Product Design & MVP",
    image: "/images/Projects/Busifinder.png",
    keywords: "MVP Design · Retool · Figma",
  },
  {
    id: 5,
    title: "myNavigation",
    year: "2024",
    type: "Mobile App Design",
    image: "/images/Projects/myNavigation.png",
    keywords: "Double Diamond · UI/UX Design",
  },
  {
    id: 6,
    title: "Robot learns writing",
    year: "2023",
    type: "Thesis Project",
    image: "/images/Projects/RobotWriting.png",
    keywords: "Reinforcement Learning · Robotics",
    url: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
  },
  {
    id: 7,
    title: "Kommoot",
    year: "2023",
    type: "HCI Evaluation",
    image: "/images/Projects/Komoot.png",
    keywords: "Heuristic Evaluation · SUS",
    url: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",
  },
  {
    id: 8,
    title: "Clustering shapes",
    year: "2023",
    type: "Machine Learning",
    image: "/images/Projects/Clustering.png",
    keywords: "Kernel Methods · SVM",
    url: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
  },
  {
    id: 9,
    title: "Image reconstruction",
    year: "2023",
    type: "Machine Learning",
    image: "/images/Projects/GanRecovery.png",
    keywords: "GANs · Gradient Descent",
    url: "https://github.com/alexkalergis/Image-Recovery-using-Generative-Adversarial-Networks",
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects" data-section>

      {/* ── Header: two-column, matches other sections ─────────────────── */}
      <div className="projects__header">
        <div className="projects__header-left">
          <span className="projects__num" aria-hidden="true">02</span>
          <h2 className="projects__title">Projects</h2>
        </div>
        <div className="projects__header-right">
          <p className="projects__intro">
            Selected work spanning product design, software engineering, and research.
          </p>
        </div>
      </div>

      {/* ── Catalog grid ───────────────────────────────────────────────── */}
      <div className="projects__grid-wrapper">
        <div className="projects__grid">
          {projects.map((project) => {
            const isLinked = Boolean(project.url);

            const content = (
              <>
                <div className="projects__card-frame">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="projects__card-caption">
                  {isLinked && (
                    <div className="projects__card-caption-top">
                      <span className="projects__card-arrow" aria-hidden="true">↗</span>
                    </div>
                  )}
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-type">{project.year} · {project.type}</p>
                  <p className="projects__card-keywords">{project.keywords}</p>
                </div>
              </>
            );

            return (
              <article key={project.id} className="projects__card">
                {isLinked ? (
                  <Link
                    href={project.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-inner"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="projects__card-inner">{content}</div>
                )}
              </article>
            );
          })}
        </div>
      </div>

    </section>
  );
}
