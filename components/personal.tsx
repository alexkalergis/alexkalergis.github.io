import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, LinkIcon, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

type LibraryItem = {
  id: number
  title: string
  link: string
  tags: string[]
  description: string
  creator?: string
  year?: number
}

const papers: LibraryItem[] = [
  {
    id: 1,
    title: "Aesthetics and the Art of Engineering",
    link: "https://www.researchgate.net/publication/276314506_Aesthetics_and_the_Art_of_Engineering",
    tags: ["Engineering", "Aesthetics", "Design Philosophy", "Engineering Education", "Polytechnic"],
    description:
      "Explores the historical relationship between engineering and aesthetics and argues for reintegrating aesthetic considerations into engineering curricula.",
    creator: "Per Boelskifte",
    year: 2014,
  },
]

const videos: LibraryItem[] = [
  {
    id: 1,
    title: "The first secret of great design",
    link: "https://youtu.be/9uOMectkCCs",
    tags: ["Design", "Innovation", "Product Design", "TED"],
    description:
      "Tony Fadell shares tips on noticing everyday details to uncover opportunities for meaningful design improvements.",
    creator: "Tony Fadell (TED)",
  },
  {
    id: 2,
    title: "How product design can change the world",
    link: "https://youtu.be/ZqeA_psKn2E",
    tags: ["Product Design", "Social Impact", "Innovation", "TED"],
    description:
      "Christiaan Maats shows how thoughtful product design can solve real-world problems and create positive social impact.",
    creator: "Christiaan Maats (TED)",
  },
]

const resources: LibraryItem[] = [
  {
    id: 1,
    title: "IDEO",
    link: "https://www.ideo.com",
    tags: ["Design Thinking", "Human-Centred Design", "Innovation"],
    description:
      "Global design consultancy that pioneered design-thinking methodology; their insights deeply inform my own design process.",
  },
  {
    id: 2,
    title: "Interaction Design Foundation",
    link: "https://www.interaction-design.org",
    tags: ["UX Design", "Education", "Design Theory"],
    description:
      "Comprehensive platform for UX education whose courses have been instrumental in developing my research and design skills.",
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
      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Personal Library</h2>
        <p className="text-xl text-muted-foreground">
          A curated collection of papers, videos, and resources that inspire my work.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="papers" className="w-full">
        {/* Tab list */}
        <div className="border-b mb-8">
          <TabsList className="flex h-auto items-center justify-start bg-transparent p-0 w-full overflow-x-auto">
            {tabTriggers.map(({ value, label, Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none bg-transparent whitespace-nowrap"
              >
                <Icon className="h-4 w-4" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Papers */}
        <TabsContent value="papers" className="space-y-8">
          {papers.map(({ id, title, link, tags, description, creator, year }) => (
            <div key={id} className="space-y-4 pb-8 border-b border-gray-200 last:border-none">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <Link
                  href={link}
                  className="inline-flex items-start gap-2 group hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-2xl font-bold group-hover:underline">{title}</h3>
                  <ExternalLink className="h-5 w-5 mt-1" />
                </Link>
                {year && (
                  <Badge variant="outline" className="self-start sm:self-auto">
                    {year}
                  </Badge>
                )}
              </div>
              {creator && <p className="text-sm font-mono text-muted-foreground">{creator}</p>}
              <p className="text-muted-foreground leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Videos */}
        <TabsContent value="videos" className="space-y-8">
          {videos.map(({ id, title, link, tags, description, creator }) => (
            <div key={id} className="space-y-4 pb-8 border-b border-gray-200 last:border-none">
              <Link
                href={link}
                className="inline-flex items-start gap-2 group hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-2xl font-bold group-hover:underline flex-1">{title}</h3>
                <ExternalLink className="h-5 w-5 mt-1" />
              </Link>
              {creator && <p className="text-sm text-muted-foreground">{creator}</p>}
              <p className="text-muted-foreground leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        {/* Resources */}
        <TabsContent value="resources" className="space-y-8">
          {resources.map(({ id, title, link, tags, description }) => (
            <div key={id} className="space-y-4 pb-8 border-b border-gray-200 last:border-none">
              <Link
                href={link}
                className="inline-flex items-start gap-2 group hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-2xl font-bold group-hover:underline">{title}</h3>
                <ExternalLink className="h-5 w-5" />
              </Link>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  )
}
