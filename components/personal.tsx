import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, LinkIcon, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

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
    creator: "Tony Fadell (via TED)",
    link: "https://www.youtube.com/watch?v=9uOMectkCCs",
    tags: ["Design", "Innovation", "Product Design", "TED", "Technology", "Habituation"],
    description:
      "Tony Fadell, designer of the iPod and Nest thermostat, shares tips on noticing 'the way things are' to find opportunities for improvement and drive change by overcoming habituation.",
  },
  {
    id: 2,
    title: "How product design can change the world",
    creator: "Christiaan Maats (via TED)",
    link: "https://www.youtube.com/watch?v=ZqeA_psKn2E",
    tags: ["Product Design", "Social Impact", "Innovation", "Design Thinking", "TED"],
    description:
      "Christiaan Maats explores how thoughtful product design can address global challenges and create positive social impact, demonstrating the power of design to solve real-world problems and improve lives.",
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

const tabTriggers = [
  { value: "papers", label: "Papers", Icon: FileText },
  { value: "videos", label: "Videos", Icon: Video },
  { value: "resources", label: "Resources", Icon: LinkIcon },
]

export function Personal() {
  return (
    <section id="personal" className="container py-0 space-y-16">
      {" "}
      {/* py-0 seems intentional for this page */}
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Personal Library</h2>
        <p className="text-xl text-muted-foreground">
          A curated collection of papers, videos, and resources that inspire my work.
        </p>
      </div>
      <Tabs defaultValue="papers" className="w-full">
        <div className="border-b mb-8">
          <TabsList className="flex h-auto sm:h-10 items-center justify-start bg-transparent p-0 w-full overflow-x-auto flex-wrap sm:flex-nowrap">
            {tabTriggers.map(({ value, label, Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex items-center justify-center px-3 py-2 sm:px-4 text-sm font-medium data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none bg-transparent whitespace-nowrap"
              >
                <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="papers" className="mt-6">
          <div className="space-y-8">
            {papers.map((paper) => (
              <div key={paper.id} className="space-y-4 pb-8 border-b border-border/50 last:border-b-0 last:pb-0">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <Link
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors inline-flex items-start gap-2 group flex-1" // Added group
                  >
                    <h3 className="text-2xl font-bold leading-tight group-hover:underline">{paper.title}</h3>{" "}
                    {/* Added group-hover:underline */}
                    <ExternalLink className="h-5 w-5 text-foreground flex-shrink-0 mt-1" />
                  </Link>
                  <Badge variant="outline" className="flex-shrink-0 self-start sm:self-auto mt-1 sm:mt-0">
                    {paper.year}
                  </Badge>
                </div>
                <p className="text-muted-foreground font-mono text-sm">{paper.authors}</p> {/* text-sm */}
                <p className="text-muted-foreground leading-relaxed">{paper.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {" "}
                  {/* Added pt-2 */}
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                      {" "}
                      {/* text-xs */}
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="space-y-8">
            {videos.map((video) => (
              <div key={video.id} className="space-y-4 pb-8 border-b border-border/50 last:border-b-0 last:pb-0">
                <Link
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-start gap-2 group"
                >
                  <h3 className="text-2xl font-bold leading-tight group-hover:underline flex-1">{video.title}</h3>
                  <ExternalLink className="h-5 w-5 text-foreground flex-shrink-0 mt-1" />
                </Link>
                <p className="text-muted-foreground text-sm">by {video.creator}</p>
                <p className="text-muted-foreground leading-relaxed">{video.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {video.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="space-y-8">
            {resources.map((resource) => (
              <div key={resource.id} className="space-y-4 pb-8 border-b border-border/50 last:border-b-0 last:pb-0">
                <Link
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <h3 className="text-2xl font-bold group-hover:underline">{resource.title}</h3>
                  <ExternalLink className="h-5 w-5 text-foreground flex-shrink-0" />
                </Link>
                <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
