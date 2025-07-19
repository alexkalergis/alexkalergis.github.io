"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "ASSETS",
    subtitle: "App design",
    image: "/images/assets-logo.png",
    tags: ["Product Design", "UX Research", "Figma"],
    type: "project",
  },
  {
    id: 2,
    title: "Hapi",
    subtitle: "App design & development",
    image: "/images/hapi-logo-transparent.png",
    tags: ["Frontend & Design", "React", "Figma"],
    type: "project",
  },
  {
    id: 3,
    title: "Busifinder",
    subtitle: "App design & MVP",
    image: "/images/busifinder-new.png",
    tags: ["Product Design", "Retool", "Figma"],
    type: "project",
  },
  {
    id: 4,
    title: "Robot Writing",
    subtitle: "Master's Thesis",
    image: "/images/robot-writing-hello-world.png",
    tags: ["Reinforcement Learning", "Robotics", "Python"],
    url: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
    type: "github",
  },
  {
    id: 5,
    title: "Komoot",
    subtitle: "App evaluation",
    image: "/images/komoot-logo-new.webp",
    tags: ["Heuristic Evaluation", "User Research", "SUS Questionnaire"],
    url: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",
    type: "figma",
  },
  {
    id: 6,
    title: "myNavigation",
    subtitle: "App design",
    image: "/images/mynavigation-logo.png",
    tags: ["UI/UX Design", "UX Research", "Figma"],
    type: "project",
  },
  {
    id: 7,
    title: "Clustering with SVMs",
    subtitle: "Machine Learning",
    image: "/images/svm-clustering-new-v3.png",
    tags: ["Classification", "Kernel Methods", "MatLab"],
    url: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
    type: "github",
  },
  {
    id: 8,
    title: "Image recovery with GANs",
    subtitle: "Machine Learning",
    image: "/images/gan-recovery-new-v2.png",
    tags: ["Gradient Descent Algorithm", "Image processing", "MatLab"],
    url: "https://github.com/alexkalergis/Image-Recovery-using-Generative-Adversarial-Networks",
    type: "github",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container space-y-16">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">My library of academic and personal projects.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
            >
              <Card className="overflow-hidden border bg-card/50 backdrop-blur-sm h-full flex flex-col transition-all duration-300 group-hover:scale-[1.03]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?width=300&height=192&query=Project+Image"}
                    alt={project.title}
                    fill
                    className={`transition-transform duration-300 group-hover:scale-105 ${
                      project.id === 1 ||
                      project.id === 3 ||
                      project.id === 4 ||
                      project.id === 5 ||
                      project.id === 6 ||
                      project.id === 7 ||
                      project.id === 8
                        ? "object-contain p-4"
                        : project.id === 2
                          ? "object-cover"
                          : "object-cover"
                    }`}
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-xs"
                  >
                    {project.year}
                  </Badge>
                </div>

                <CardContent className="p-5 space-y-1 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold leading-tight font-mono">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.subtitle}</p>
                  <div className="border-t border-border/30 my-3" />
                  <hr className="my-2 border-t border-gray-200" />
                  <div className="flex flex-col gap-1.5 flex-grow content-start min-h-[3.5em]">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
