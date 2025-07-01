"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

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
              <Card className="overflow-hidden border bg-card/50 backdrop-blur-sm h-full flex flex-col transition-all duration-300 group-hover:border-foreground/30 group-hover:scale-[1.03]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?width=300&height=192&query=Project+Image"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-xs"
                  >
                    {project.year}
                  </Badge>
                </div>

                <CardContent className="p-5 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold leading-tight min-h-[2.5em]">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5 flex-grow content-start min-h-[3.5em]">
                    {project.tags.slice(1).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs rounded-full px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center pt-4">
          <Button variant="outline" size="lg" className="px-8 bg-transparent" asChild>
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
