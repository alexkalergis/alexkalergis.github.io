"use client";

import Image from "next/image";
import Link from "next/link";
import "./projects.scss";

const projects = [
  {
    id: 1,
    title: "Dr.Parrot",
    type: "Product Design & Development",
    image: "/images/Projects/logo.webp",
    url: "https://dr-parrot.gr",
  },
  {
    id: 2,
    title: "maMEDS",
    type: "Product Design & Development",
    image: "/images/Projects/maMEDS.webp",
    url: "https://mameds.gr"
  },
  {
    id: 0,
    title: "Arkon.health",
    type: "Website Design & Development",
    image: "/images/Projects/Arkon-logo.webp",
  },
  {
    id: 3,
    title: "HIVE",
    type: "Mobile App Design",
    image: "/images/Projects/HIVE.webp",
  },
  {
    id: 4,
    title: "AssetScope",
    type: "Mobile App Design",
    image: "/images/Projects/Assets.webp",
  },
  {
    id: 5,
    title: "Busifinder",
    type: "Web App Design",
    image: "/images/Projects/Busifinder.webp",
  },
  {
    id: 6,
    title: "Navigation App Evaluation",
    type: "Design & Research",
    image: "/images/Projects/myNavigation.webp",
    url: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",

  },
  {
    id: 7,
    title: "Robot writing",
    type: "Robotics Engineering",
    image: "/images/Projects/RobotWriting.webp",
    url: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
  },
  {
    id: 8,
    title: "Clustering shapes",
    type: "Machine Learning Engineering",
    image: "/images/Projects/Clustering.webp",
    url: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
  },
  {
    id: 9,
    title: "Image reconstruction",
    type: "Machine Learning Engineering",
    image: "/images/Projects/GanRecovery.webp",
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
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="projects__card-img object-contain"
                      />
                    ) : (
                      <span className="projects__card-soon">Coming soon</span>
                    )}
                  </div>

                  <div className="projects__card-caption">
                    <h3 className="projects__card-title">{project.title}</h3>
                    <p className="projects__card-type">{project.type}</p>
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
