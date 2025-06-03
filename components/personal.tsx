import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, LinkIcon, ExternalLink, Quote } from "lucide-react"
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
      title: "The Art of Code",
      creator: "Dylan Beattie",
      link: "https://www.youtube.com/watch?v=6avJHaC3C2U",
      tags: ["Programming", "Art", "Creativity", "Code", "Music"],
      description:
        "A fascinating exploration of how programming can be an art form, featuring live coding performances and the intersection of code, music, and creativity. Dylan demonstrates how code can be used to create music, poetry, and visual art.",
    },
    {
      id: 2,
      title: "The Future of Programming",
      creator: "Bret Victor",
      link: "https://www.youtube.com/watch?v=8pTEmbeENF4",
      tags: ["Programming", "Future", "Innovation", "Technology", "Design"],
      description:
        "A thought-provoking presentation delivered as if from 1973, imagining what programming might look like in the future. Bret Victor challenges conventional thinking about programming paradigms and user interfaces.",
    },
    {
      id: 3,
      title: "Inventing on Principle",
      creator: "Bret Victor",
      link: "https://www.youtube.com/watch?v=PUv66718DII",
      tags: ["Design", "Programming", "Innovation", "Creativity", "Principles"],
      description:
        "An inspiring talk about following your principles and how immediate feedback can transform the creative process. Victor demonstrates revolutionary programming tools that provide instant visual feedback.",
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

  const quotes = [
    {
      id: 1,
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      context: "Computer Scientist & Turing Award Winner",
    },
    {
      id: 2,
      text: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
      context: "Co-founder of Apple Inc.",
    },
    {
      id: 3,
      text: "Any sufficiently advanced technology is indistinguishable from magic.",
      author: "Arthur C. Clarke",
      context: "Science Fiction Writer & Futurist",
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
        <TabsList className="grid w-full grid-cols-4">
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
          <TabsTrigger value="quotes" className="flex items-center gap-2">
            <Quote className="h-4 w-4" />
            <span className="hidden sm:inline">Quotes</span>
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
        <TabsContent value="quotes" className="mt-6">
          <div className="grid md:grid-cols-1 gap-6">
            {quotes.map((quote) => (
              <Card key={quote.id}>
                <CardContent className="p-6">
                  <blockquote className="text-lg italic mb-4 border-l-4 border-primary pl-4">"{quote.text}"</blockquote>
                  <div className="text-right">
                    <p className="font-medium">— {quote.author}</p>
                    <p className="text-sm text-muted-foreground">{quote.context}</p>
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
