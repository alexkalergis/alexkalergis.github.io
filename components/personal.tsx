import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, LinkIcon, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function Personal() {
  const papers = [
    {
      id: 1,
      title: "Aesthetics and the Art of Engineering",
      authors: "Per Boelskifte",
      year: 2014,
      link: "https://www.researchgate.net/publication/276314506_Aesthetics_and_the_Art_of_Engineering",
      tags: ["Engineering", "Aesthetics", "Design Philosophy", "Engineering Education", "Polytechnic"],
      description:
        "This comprehensive paper explores the historical relationship between engineering and aesthetics, tracing how the holistic 'polytechnic' approach of early engineers like Hans Christian Ørsted gave way to specialized 'monotechnic' education. Through analysis of engineering textbooks and historical examples, Boelskifte argues for reintegrating aesthetic considerations into engineering curricula, emphasizing that aesthetics plays a central role in the creative process and is vital for innovative product development.",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "MIT 6.S191: Introduction to Deep Learning",
      creator: "MIT",
      link: "https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI",
      tags: ["Deep Learning", "Neural Networks", "MIT"],
      description: "Comprehensive lecture series that provided me with a solid foundation in deep learning concepts.",
    },
    {
      id: 2,
      title: "Stanford CS231n: Convolutional Neural Networks for Visual Recognition",
      creator: "Stanford University",
      link: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv",
      tags: ["CNN", "Computer Vision", "Stanford"],
      description:
        "In-depth course on CNNs that significantly improved my understanding of computer vision techniques.",
    },
    {
      id: 3,
      title: "Two Minute Papers",
      creator: "Károly Zsolnai-Fehér",
      link: "https://www.youtube.com/c/K%C3%A1rolyZsolnai",
      tags: ["AI Research", "Paper Summaries", "Accessible"],
      description:
        "Concise explanations of complex AI research papers that help me stay updated with the latest developments.",
    },
  ]

  const resources = [
    {
      id: 1,
      title: "IDEO",
      link: "https://www.ideo.com",
      tags: ["Design Thinking", "Human-Centered Design", "Innovation"],
      description:
        "Global design consultancy that pioneered design thinking methodology. Their insights and case studies have greatly influenced my approach to product design and user research.",
    },
    {
      id: 2,
      title: "Interaction Design Foundation",
      link: "https://www.interaction-design.org",
      tags: ["UX Design", "Education", "Design Theory"],
      description:
        "Comprehensive platform for design education and certification. Their courses and articles have been instrumental in developing my UX design skills and theoretical knowledge.",
    },
  ]

  return (
    <section id="personal" className="container py-24 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Personal Library</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          A collection of papers, videos, and resources that have influenced my thinking and work.
        </p>
      </div>

      <Tabs defaultValue="papers" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="papers" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Papers</span>
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            <span className="hidden sm:inline">Videos</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Resources</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="papers" className="mt-6">
          <div className="grid md:grid-cols-1 gap-6">
            {papers.map((paper) => (
              <Card key={paper.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <Link
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      {paper.title}
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </Link>
                    <Badge variant="outline">{paper.year}</Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-mono">{paper.authors}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{paper.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <Card key={video.id}>
                <CardHeader>
                  <CardTitle>
                    <Link
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      {video.title}
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">by {video.creator}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{video.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <CardTitle>
                    <Link
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      {resource.title}
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
