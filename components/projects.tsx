"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "maMEDS",
    year: "2025-present",
    subtitle: "Product Design & Develop",
    image: "/images/Projects/maMEDS.png",
    keywords: "Keywords",
  },
  {
    id: 2,
    title: "ASSETS",
    year: "2025",
    subtitle: "Product Design & Develop",
    image: "/images/Projects/Assets.png",
    keywords: "Keywords",
  },
  {
    id: 3,
    title: "Hapi",
    year: "2025",
    subtitle: "Product Design & Develop",
    image: "/images/Projects/Hapi.png",
    keywords: "Lean UX, React, Figma",
  },
  {
    id: 4,
    title: "Busifinder",
    year: "2024",
    subtitle: "Product Design & MVP",
    image: "/images/Projects/Busifinder.png",
    keywords: "MVP Design, Retool, Figma",
  },
  {
    id: 5,
    title: "myNavigation",
    year: "2024",
    subtitle: "Mobile app design",
    image: "/images/Projects/myNavigation.png",
    keywords: "Double Diamond, UI/UX Design",
  },
  {
    id: 6,
    title: "Robot learns writing",
    year: "2023",
    subtitle: "Thesis Project",
    image: "/images/Projects/RobotWriting.png",
    keywords: "Reinforcement Learning, Robotics",
    url: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
  },
  {
    id: 7,
    title: "Kommoot",
    year: "2023",
    subtitle: "HCI Course",
    image: "/images/Projects/Komoot.png",
    keywords: "Heuristic Evaluation, SUS",
    url: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",
  },
  {
    id: 8,
    title: "Clustering shapes",
    year: "2023",
    subtitle: "Machine Learning Course",
    image: "/images/Projects/Clustering.png",
    keywords: "Machine Learning, Kernel Methods",
    url: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
  },
  {
    id: 9,
    title: "Image reconstruction",
    year: "2023",
    subtitle: "Machine Learning Course",
    image: "/images/Projects/GanRecovery.png",
    keywords: "Machine Learning, Gradient Descent",
    url: "https://github.com/alexkalergis/Image-Recovery-using-Generative-Adversarial-Networks",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container space-y-16">
        <div className="space-y-6">
          <h2 className="font-bold text-5xl">Projects</h2>
          <p className="text-muted-foreground max-w-3xl text-lg">
            My library of academic and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => {
            const Wrapper: any = project.url ? Link : "div";
            const wrapperProps = project.url
              ? {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "block",
                }
              : {};

            return (
              <Wrapper key={project.id} {...wrapperProps}>
                <div
                  className={`flex flex-col gap-[25px] p-2.5 rounded-lg border border-[#D9D9D9] h-[288px] transition-transform ${
                    project.url ? "hover:scale-105" : ""
                  }`}
                >
                  <div className="flex-1 relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="text-sm font-bold text-center text-black font-mono">
                      {project.title} | {project.year}
                    </div>
                    <div className="text-sm font-medium text-center text-black font-mono">
                      {project.subtitle}
                    </div>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
