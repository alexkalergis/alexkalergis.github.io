"use client";

import Image from "next/image";
import Link from "next/link";
import "./projects.scss";

const projects = [
  {
    id: 1,
    title: "Dr.Parrot",
    type: "Product Design & Development",
    image: "/images/Projects/DrParrot.svg",
    keywords: "Figma · React · Claude Code",
  },
  {
    id: 2,
    title: "maMEDS",
    type: "Product Design & Development",
    image: "/images/Projects/maMEDS.png",
    keywords: "Figma · React · React Native",
    url: "https://mameds.gr"
  },
  {
    id: 3,
    title: "HIVE",
    type: "Mobile App Design",
    image: "/images/Projects/HIVE.webp",
    keywords: "Figma · Claude Code",
  },
  {
    id: 4,
    title: "ASSETS",
    type: "Mobile App Design",
    image: "/images/Projects/Assets.png",
    keywords: "Figma · React Native",
  },
  {
    id: 5,
    title: "Busifinder",
    type: "Web App Design",
    image: "/images/Projects/Busifinder.png",
    keywords: "Figma · Retool",
  },
  {
    id: 6,
    title: "Navigation App Evaluation",
    type: "Design & Research",
    image: "/images/Projects/myNavigation.png",
    keywords: "Double Diamond · Heuristic",
    url: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",

  },
  {
    id: 7,
    title: "Robot writing",
    type: "Machine Learning",
    image: "/images/Projects/RobotWriting.png",
    keywords: "Machine Learning · Robotics",
    url: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
  },
  {
    id: 8,
    title: "Clustering shapes",
    type: "Machine Learning",
    image: "/images/Projects/Clustering.png",
    keywords: "SVM · Kernel Methods",
    url: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
  },
  {
    id: 9,
    title: "Image reconstruction",
    type: "Machine Learning",
    image: "/images/Projects/GanRecovery.png",
    keywords: "GANs · Gradient Descent",
    url: "https://github.com/alexkalergis/Image-Recovery-using-Generative-Adversarial-Networks",
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects" data-section>
      <div className="projects__container">
        <div className="projects__left">
          <span className="projects__num" aria-hidden="true">02</span>
          <h2 className="projects__title">Projects</h2>
        </div>

        <div className="projects__right">
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
                    {isLinked && <span className="projects__card-arrow" aria-hidden="true">↗</span>}
                  </div>

                  <div className="projects__card-caption">
                    <h3 className="projects__card-title">{project.title}</h3>
                    <p className="projects__card-type">{project.type}</p>
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
      </div>
    </section>
  );
}
