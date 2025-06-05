import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Robot Writing via Reinforcement Learning",
      image: "/images/robot-rl.png",
      tags: ["Python", "Reinforcement Learning", "TensorFlow", "PyTorch"],
      githubUrl: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
      year: "2023",
      slug: "robot-writing-rl",
    },
    {
      id: 2,
      title: "Design & Evaluation of a Navigation App",
      image: "/images/komoot-logo.png",
      tags: ["Figma", "UX Research", "User Personas", "Heuristic Evaluation"],
      githubUrl: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",
      year: "2023",
      slug: "navigation-app-design",
    },
    {
      id: 3,
      title: "Clustering using Support Vector Machines",
      image: "/images/svm-clustering.png",
      tags: ["MatLab", "Kernel Methods", "SVM", "KMeans"],
      githubUrl: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
      year: "2022",
      slug: "svm-clustering",
    },
    {
      id: 4,
      title: "Image Recovery using GANs",
      image: "/images/gan-recovery.png",
      tags: ["MatLab", "GANs", "Gradient Descent", "Image Processing"],
      githubUrl: "https://github.com/alexkalergis/Image-Recovery-using-Generative-Adversarial-Networks",
      year: "2022",
      slug: "gan-image-recovery",
    },
  ]

  return (
    <section id="projects" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Academic Project Highlights</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          A selection of my academic projects showcasing my skills in AI, machine learning, robotics, and product
          design.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Badge variant="outline" className="mt-2">
                    {project.year}
                  </Badge>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      <ArrowUpRight className="h-5 w-5" />
                      <span className="sr-only">View Project</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg" asChild>
          <Link
            href="https://github.com/alexkalergis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            View more on GitHub
          </Link>
        </Button>
      </div>
    </section>
  )
}
