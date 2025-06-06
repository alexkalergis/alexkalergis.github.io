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
      title: "The first secret of great design",
      creator: "Tony Fadell",
      link: "https://www.youtube.com/watch?v=9uOMectkCCs&t=1s",
      tags: ["Design", "Innovation", "Product Design", "TED", "Technology"],
      description:
        "Tony Fadell, the man behind the first iPod and the Nest thermostat, shares insights about noticing the little things that make a big difference in design. A fascinating look at how to see problems and opportunities that others miss.",
    },
    {
      id: 2,
      title: "How to think like a designer",
      creator: "TED",
      link: "https://www.youtube.com/watch?v=ZqeA_psKn2E",
      tags: ["Design Thinking", "Creativity", "Problem Solving", "Innovation", "TED"],
      description:
        "An exploration of the design thinking process and how designers approach problems differently. Learn the mindset and methodologies that can help you think more creatively and solve complex challenges.",
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
    <section id="personal" className="container py-0 space-y-16">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Personal Library</h2>
      </div>

      <Tabs defaultValue="papers" className="w-full">
        <div className="border-b mb-8">
          <TabsList className="flex h-10 items-center justify-start bg-transparent p-0 w-full overflow-x-auto">
            <TabsTrigger
              value="papers"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <FileText className="h-4 w-4 mr-2" />
              Papers
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <Video className="h-4 w-4 mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <LinkIcon className="h-4 w-4 mr-2" />
              Resources
            </TabsTrigger>
            <TabsTrigger
              value="quotes"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <Quote className="h-4 w-4 mr-2" />
              Quotes
            </TabsTrigger>
          </TabsList>
        </div>

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
