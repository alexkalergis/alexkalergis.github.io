"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Robot Writing via Reinforcement Learning",
    image: "/images/robot-rl.png",
    tags: ["Python", "Reinforcement Learning", "TensorFlow", "Deep Learning"],
    url: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
    year: "2023",
    type: "github",
  },
  {
    id: 2,
    title: "Design & Evaluation of a Navigation App",
    image: "/images/komoot-logo.png",
    tags: ["Figma", "UX Research", "User Personas", "Heuristic Evaluation"],
    url: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",
    year: "2023",
    type: "figma",
  },
  {
    id: 3,
    title: "Clustering using Support Vector Machines",
    image: "/images/svm-clustering.png",
    tags: ["MatLab", "Kernel Methods", "SVM", "Classification"],
    url: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
    year: "2022",
    type: "github",
  },
  {
    id: 4,
    title: "Image Recovery using GANs",
    image: "/images/gan-recovery.png",
    tags: ["MatLab", "GANs", "Image Processing", "MNIST"],
    url: "https://github.com/alexkalergis/Image-Recovery-using-Generative-Adversarial-Networks",
    year: "2022",
    type: "github",
  },
]

function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15.5 0H8.5C6.57 0 5 1.57 5 3.5S6.57 7 8.5 7H12V3.5C12 1.57 13.43 0 15.5 0S19 1.57 19 3.5S17.43 7 15.5 7S12 5.43 12 3.5V0Z" />
      <path d="M8.5 7C6.57 7 5 8.57 5 10.5S6.57 14 8.5 14S12 12.43 12 10.5S10.43 7 8.5 7Z" />
      <path d="M8.5 14C6.57 14 5 15.57 5 17.5S6.57 21 8.5 21S12 19.43 12 17.5V14H8.5Z" />
      <path d="M12 10.5C12 8.57 13.57 7 15.5 7S19 8.57 19 10.5S17.43 14 15.5 14S12 12.43 12 10.5Z" />
    </svg>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container space-y-16">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">Academic and personal projects highlights</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border bg-card/50 backdrop-blur-sm h-full flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg?width=300&height=192&query=Project+Image"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Badge variant="secondary" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-xs">
                  {project.year}
                </Badge>
              </div>

              <CardContent className="p-5 space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg font-bold leading-tight min-h-[2.5em]">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 flex-grow content-start min-h-[3.5em]">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs rounded-full px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2 mt-auto">
                  <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      {project.type === "figma" ? (
                        <FigmaIcon className="h-3.5 w-3.5 mr-1.5" />
                      ) : (
                        <Github className="h-3.5 w-3.5 mr-1.5" />
                      )}
                      View Project
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <Link
              href="https://github.com/alexkalergis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
