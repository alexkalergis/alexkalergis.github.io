import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, ExternalLink, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Robot Writing via Reinforcement Learning",
      description:
        "Designed and developed a 2-DOF robot using reinforcement learning algorithms (DQN) to learn handwriting. Gained experience with Python, NumPy, Tensorflow, PyTorch, Deep learning & Neural Network Architecture. Conducted research on multiple academic papers, enhancing research and analytical skills.",
      image: "/images/robot-rl.png",
      tags: ["Python", "Reinforcement Learning", "TensorFlow", "PyTorch", "Deep Learning", "Neural Networks"],
      liveUrl: "#",
      githubUrl: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
      year: "2023",
      supervisor: "Charalampos Bechlioulis",
      supervisorUrl: "https://scholar.google.com/citations?hl=el&user=F7peXRQAAAAJ&view_op=list_works&sortby=pubdate",
      resources: [
        {
          name: "Thesis Research",
          url: "https://nemertes.library.upatras.gr/items/cb5700c7-59aa-496a-b8a2-1c2ab0f3134e",
        },
      ],
    },
    {
      id: 2,
      title: "Design & Evaluation of a Navigation App",
      description:
        "Evaluated the 'Komoot' app using questionnaires, Keystroke-Level Model (KLM) & heuristic methods. Analyzed typical users using SUS Questionnaire and created detailed user personas & use scenarios. Designed a navigation app utilizing the PACT concept and the Hix-Hartson design model.",
      image: "/images/komoot-logo.png",
      tags: ["Figma", "UX Research", "User Personas", "Heuristic Evaluation", "PACT Framework", "SUS Questionnaire"],
      liveUrl: "#",
      githubUrl: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",
      year: "2023",
      supervisor: "Nikolaos Avouris",
      supervisorUrl: "https://scholar.google.com/citations?hl=el&user=FwuKA4UAAAAJ&view_op=list_works&sortby=pubdate",
      resources: [
        {
          name: "Figma Prototype",
          url: "#",
        },
        {
          name: "Research Presentation",
          url: "https://drive.google.com/file/d/1KpI8UsbU7C2FGMNgw9_AkjJ0hq35zUkF/view?usp=share_link",
        },
      ],
    },
    {
      id: 3,
      title: "Clustering using Support Vector Machines",
      description:
        "Utilized Gaussian Kernel function to approximate the probability density of a uniformly distributed random variable. Engineered a classifier to distinguish between circles (•) and stars (*) using the Kernel Function. Designed a point (x, y) classifier employing KMeans & Optimum KMeans Algorithm.",
      image: "/images/svm-clustering.png",
      tags: ["MatLab", "Kernel Methods", "SVM", "KMeans", "Classification Algorithms"],
      liveUrl: "#",
      githubUrl: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
      year: "2022",
      supervisor: "George V. Moustakides",
      supervisorUrl: "https://scholar.google.gr/citations?hl=el&user=O5YDyjoAAAAJ&view_op=list_works&sortby=pubdate",
      resources: [],
    },
    {
      id: 4,
      title: "Image Recovery using GANs",
      description:
        "Reconstructed images with missing parts of handwritten numbers from MNIST dataset. Enhanced image recovery for noisy images through advanced Gradient Descent Algorithm. Implemented generative models for digit recognition and image reconstruction with noise.",
      image: "/images/gan-recovery.png",
      tags: ["MatLab", "GANs", "Gradient Descent", "Image Processing", "MNIST"],
      liveUrl: "#",
      githubUrl: "https://github.com/alexkalergis/Image-Recovery-using-Generative-Adversarial-Networks",
      year: "2022",
      supervisor: "George V. Moustakides",
      supervisorUrl: "https://scholar.google.gr/citations?hl=el&user=O5YDyjoAAAAJ&view_op=list_works&sortby=pubdate",
      resources: [],
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
          <Card key={project.id} className="overflow-hidden group">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <Badge variant="outline">{project.year}</Badge>
                    {project.supervisor && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <User className="h-3 w-3 flex-shrink-0" />
                        <Link
                          href={project.supervisorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="truncate hover:text-primary transition-colors hover:underline inline-flex items-center gap-1"
                        >
                          {project.supervisor}
                          <ExternalLink className="h-3 w-3 text-primary" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              {project.resources && project.resources.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-sm font-medium mb-2">Additional Resources:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.resources.map((resource, index) => (
                      <Link
                        key={index}
                        href={resource.url}
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.name}
                        <ExternalLink className="h-3 w-3 text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
