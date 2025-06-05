import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, User, Calendar, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = {
  "robot-writing-rl": {
    title: "Robot Writing via Reinforcement Learning",
    subtitle: "Designing a 2-DOF robot that learns handwriting through AI algorithms",
    image: "/images/robot-rl.png",
    year: "2023",
    duration: "6 months",
    supervisor: "Charalampos Bechlioulis",
    supervisorUrl: "https://scholar.google.com/citations?hl=el&user=F7peXRQAAAAJ&view_op=list_works&sortby=pubdate",
    githubUrl: "https://github.com/alexkalergis/Robot-writing-via-Reinforcement-Learning",
    thesisUrl: "https://nemertes.library.upatras.gr/items/cb5700c7-59aa-496a-b8a2-1c2ab0f3134e",
    tags: ["Python", "Reinforcement Learning", "TensorFlow", "PyTorch", "Deep Learning", "Neural Networks", "Robotics"],
    overview:
      "This project represents my master's thesis work, where I designed and developed a 2-DOF robotic system capable of learning handwriting through reinforcement learning algorithms. The project combines robotics, artificial intelligence, and control systems to create an autonomous writing system.",
    objectives: [
      "Design and implement a 2-DOF robotic arm for writing tasks",
      "Develop reinforcement learning algorithms (DQN) for handwriting learning",
      "Create a simulation environment for training and testing",
      "Evaluate the system's performance in real-world writing scenarios",
    ],
    methodology:
      "The project utilized Deep Q-Networks (DQN) as the primary reinforcement learning algorithm. The robot was trained in a simulated environment before being tested on physical writing tasks. The system learned to optimize pen trajectories and pressure control through trial and error.",
    results: [
      "Successfully implemented a working 2-DOF robotic writing system",
      "Achieved legible handwriting output after training convergence",
      "Demonstrated the effectiveness of RL in robotic control applications",
      "Contributed to research in the intersection of AI and robotics",
    ],
    technologies: {
      "Programming Languages": ["Python"],
      "AI/ML Frameworks": ["TensorFlow", "PyTorch", "NumPy", "Keras"],
      Robotics: ["Robot Operating System (ROS)", "Control Systems"],
      Algorithms: ["Deep Q-Networks (DQN)", "Reinforcement Learning", "Neural Networks"],
    },
  },
  "navigation-app-design": {
    title: "Design & Evaluation of a Navigation App",
    subtitle: "Comprehensive UX research and design of a modern navigation application",
    image: "/images/komoot-logo.png",
    year: "2023",
    duration: "4 months",
    supervisor: "Nikolaos Avouris",
    supervisorUrl: "https://scholar.google.com/citations?hl=el&user=FwuKA4UAAAAJ&view_op=list_works&sortby=pubdate",
    githubUrl: "https://github.com/alexkalergis/Design-and-evaluation-of-a-navigation-app",
    presentationUrl: "https://drive.google.com/file/d/1KpI8UsbU7C2FGMNgw9_AkjJ0hq35zUkF/view?usp=share_link",
    tags: ["Figma", "UX Research", "User Personas", "Heuristic Evaluation", "PACT Framework", "SUS Questionnaire"],
    overview:
      "This project involved a comprehensive evaluation of the 'Komoot' navigation app and the subsequent design of an improved navigation application. The work encompassed user research, heuristic evaluation, and the complete design process from concept to prototype.",
    objectives: [
      "Conduct thorough evaluation of existing navigation app (Komoot)",
      "Perform user research using established UX methodologies",
      "Create detailed user personas and use scenarios",
      "Design an improved navigation app using human-centered design principles",
    ],
    methodology:
      "The project employed multiple UX research methods including SUS Questionnaire for usability assessment, Keystroke-Level Model (KLM) for interaction analysis, heuristic evaluation based on Nielsen's principles, and the PACT framework for contextual analysis.",
    results: [
      "Comprehensive usability analysis of Komoot app with actionable insights",
      "Development of evidence-based user personas and scenarios",
      "Complete design of a new navigation app addressing identified pain points",
      "Validation of design decisions through user testing and feedback",
    ],
    technologies: {
      "Design Tools": ["Figma", "Adobe Creative Suite"],
      "Research Methods": ["SUS Questionnaire", "Keystroke-Level Model", "Heuristic Evaluation"],
      Frameworks: ["PACT Framework", "Hix-Hartson Design Model"],
      Analysis: ["User Journey Mapping", "Persona Development", "Usability Testing"],
    },
  },
  "svm-clustering": {
    title: "Clustering using Support Vector Machines",
    subtitle: "Advanced machine learning approach to data clustering and classification",
    image: "/images/svm-clustering.png",
    year: "2022",
    duration: "3 months",
    supervisor: "George V. Moustakides",
    supervisorUrl: "https://scholar.google.gr/citations?hl=el&user=O5YDyjoAAAAJ&view_op=list_works&sortby=pubdate",
    githubUrl: "https://github.com/alexkalergis/Clustering-using-Support-Vector-Machines",
    tags: ["MatLab", "Kernel Methods", "SVM", "KMeans", "Classification Algorithms", "Machine Learning"],
    overview:
      "This project explores advanced clustering techniques using Support Vector Machines and kernel methods. The work focuses on developing efficient algorithms for data classification and clustering, with practical applications in pattern recognition.",
    objectives: [
      "Implement Gaussian Kernel function for probability density approximation",
      "Develop SVM-based classifier for geometric shape recognition",
      "Create optimized clustering algorithms using KMeans and variations",
      "Compare performance of different clustering approaches",
    ],
    methodology:
      "The project utilized Gaussian Kernel functions to approximate probability density of uniformly distributed random variables. A classifier was engineered to distinguish between different geometric shapes using kernel methods, and point classification was implemented using both standard KMeans and optimized KMeans algorithms.",
    results: [
      "Successful implementation of kernel-based clustering algorithms",
      "Effective classification system for geometric shapes",
      "Performance comparison between different clustering methods",
      "Optimized algorithms showing improved convergence rates",
    ],
    technologies: {
      Programming: ["MATLAB", "Statistical Computing"],
      Algorithms: ["Support Vector Machines", "Kernel Methods", "KMeans Clustering"],
      Mathematics: ["Gaussian Kernels", "Probability Density Functions", "Optimization"],
      Applications: ["Pattern Recognition", "Data Classification", "Cluster Analysis"],
    },
  },
  "gan-image-recovery": {
    title: "Image Recovery using GANs",
    subtitle: "Reconstructing damaged images using Generative Adversarial Networks",
    image: "/images/gan-recovery.png",
    year: "2022",
    duration: "3 months",
    supervisor: "George V. Moustakides",
    supervisorUrl: "https://scholar.google.gr/citations?hl=el&user=O5YDyjoAAAAJ&view_op=list_works&sortby=pubdate",
    githubUrl: "https://github.com/alexkalergis/Image-Recovery-using-Generative-Adversarial-Networks",
    tags: ["MatLab", "GANs", "Gradient Descent", "Image Processing", "MNIST", "Deep Learning"],
    overview:
      "This project focuses on using Generative Adversarial Networks to reconstruct images with missing parts, specifically working with handwritten digits from the MNIST dataset. The work demonstrates the power of GANs in image restoration and noise reduction.",
    objectives: [
      "Implement GAN architecture for image reconstruction tasks",
      "Develop algorithms for handling missing image data",
      "Enhance image recovery for noisy input images",
      "Evaluate performance on MNIST digit recognition dataset",
    ],
    methodology:
      "The project implemented Generative Adversarial Networks with advanced Gradient Descent algorithms for optimization. The system was trained on the MNIST dataset to learn patterns in handwritten digits, enabling it to reconstruct missing or corrupted parts of digit images.",
    results: [
      "Successful implementation of GAN-based image recovery system",
      "Effective reconstruction of missing parts in handwritten digits",
      "Improved noise reduction capabilities for corrupted images",
      "High-quality digit recognition and reconstruction performance",
    ],
    technologies: {
      Programming: ["MATLAB", "Image Processing Toolbox"],
      "AI/ML": ["Generative Adversarial Networks", "Deep Learning", "Neural Networks"],
      Optimization: ["Gradient Descent", "Backpropagation", "Loss Functions"],
      Datasets: ["MNIST", "Image Datasets", "Computer Vision"],
    },
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container py-12 md:py-16">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/#projects">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <p className="text-muted-foreground text-lg">{project.subtitle}</p>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Meta */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Code className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Supervisor</p>
                  <Link
                    href={project.supervisorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {project.supervisor}
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex gap-3">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  {(project as any).thesisUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={(project as any).thesisUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Thesis
                      </Link>
                    </Button>
                  )}
                  {(project as any).presentationUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={(project as any).presentationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Presentation
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Content Sections */}
        <section className="container py-12 space-y-16">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{project.overview}</p>
          </div>

          {/* Objectives */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Objectives</h2>
            <ul className="space-y-3">
              {project.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{objective}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Methodology</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{project.methodology}</p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Results</h2>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{result}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <Card key={category}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
