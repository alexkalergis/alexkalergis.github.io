"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
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

  return (
    <section id="projects" className="py-24">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">Academic and personal projects highlights</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group space-y-4">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-lg border">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold leading-tight">{project.title}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* View Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  {project.type === "figma" ? (
                    <>
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.5 0H8.5C6.57 0 5 1.57 5 3.5S6.57 7 8.5 7H12V3.5C12 1.57 13.43 0 15.5 0S19 1.57 19 3.5S17.43 7 15.5 7S12 5.43 12 3.5V0Z" />
                        <path d="M8.5 7C6.57 7 5 8.57 5 10.5S6.57 14 8.5 14S12 12.43 12 10.5S10.43 7 8.5 7Z" />
                        <path d="M8.5 14C6.57 14 5 15.57 5 17.5S6.57 21 8.5 21S12 19.43 12 17.5V14H8.5Z" />
                        <path d="M12 10.5C12 8.57 13.57 7 15.5 7S19 8.57 19 10.5S17.43 14 15.5 14S12 12.43 12 10.5Z" />
                      </svg>
                      View
                    </>
                  ) : (
                    <>
                      <Github className="h-4 w-4 mr-2" />
                      View
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8 transition-colors" asChild>
            <a
              href="https://github.com/alexkalergis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
