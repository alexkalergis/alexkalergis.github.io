"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, LinkIcon, ExternalLink, Camera, Book, Music, Bike } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Personal Library Data
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

// Hobbies Data
const photographyItems = [
  {
    id: 1,
    title: "Theater Act",
    description: 'Photographic documentation of a theatrical performance at "Εμπρός Theater"',
    image: "/images/theater-act.png",
  },
  {
    id: 2,
    title: "Ενδιάμεσα Τοπία",
    description: 'Visual documentation of the group exhibition "Ενδιάμεσα Τοπία" at Mets Art Center',
    image: "/images/interim-landscapes.png",
  },
]

const favoriteAlbums = ["The Lumineers", "Black Pumas", "Purpose"]

const readingItems = [
  {
    id: 1,
    title: "Favorite Books",
    items: ["When Nietzsche Wept", "Ikigai", "Siddhartha", "Logicomix", "Elementary Aesthetics"],
  },
  { id: 2, title: "Currently Reading", items: [] },
  { id: 3, title: "Favorite Genres", items: ["Science Fiction", "Philosophy", "Popular Science"] },
]

const movieItems = [
  { id: 1, title: "Favorite Universes", items: ["Avatar", "Harry Potter", "Star Wars", "Pirates of the Caribbean"] },
  { id: 2, title: "Favorite Movies", items: ["Spirited Away", "A beautiful mind", "Other me"] },
  { id: 3, title: "Favorite Genres", items: ["Science Fiction", "Thriller", "Fantasy"] },
]

const sportsItems = [
  { id: 1, title: "Cycling", content: "Weekend rides around the countryside, occasional city commuting" },
  { id: 2, title: "Hiking", content: "Exploring mountain trails and natural parks" },
  { id: 3, title: "Swimming", content: "Regular swimming sessions at local beaches during summer" },
]

const libraryTabTriggers = [
  { value: "papers", label: "Papers", Icon: FileText },
  { value: "videos", label: "Videos", Icon: Video },
  { value: "resources", label: "Resources", Icon: LinkIcon },
]

const hobbiesTabTriggers = [
  { value: "photography", label: "Photography", Icon: Camera },
  { value: "music", label: "Music", Icon: Music },
  { value: "reading", label: "Reading", Icon: Book },
  { value: "movies", label: "Movies", Icon: Video },
  { value: "sports", label: "Sports", Icon: Bike },
]

export function Personal() {
  return (
    <div className="container py-0 space-y-24">
      {/* Personal Library Section */}
      <section id="personal-library" className="space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Personal Library</h2>
          <p className="text-muted-foreground max-w text-lg">
            A curated collection that inspires me.
          </p>
        </div>

        <Tabs defaultValue="papers" className="w-full">
          {/* Tab list */}
          <div className="border-b mb-8">
            <TabsList className="flex h-auto items-center justify-start bg-transparent p-0 w-full overflow-x-auto">
              {libraryTabTriggers.map(({ value, label, Icon }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:bg-muted/20 rounded-none bg-transparent whitespace-nowrap transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Papers */}
          <TabsContent value="papers" className="space-y-8 data-[state=inactive]:hidden">
            {papers.map(({ id, title, link, tags, description, creator, year }) => (
              <div key={id} className="space-y-4 pb-8 border-b border-gray-200 last:border-none">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <Link
                    href={link}
                    className="inline-flex items-start gap-2 group hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-xl font-bold group-hover:underline leading-tight">{title}</h3>
                    <ExternalLink className="h-4 w-4 mt-1 flex-shrink-0" />
                  </Link>
                  {year && <span className="text-sm text-muted-foreground self-start sm:self-auto">{year}</span>}
                </div>
                {creator && <p className="text-sm font-mono text-muted-foreground">{creator}</p>}
                <p className="text-muted-foreground leading-relaxed">{description}</p>
                <div className="pt-2">
                  <span className="text-xs text-muted-foreground">{tags.join(" | ")}</span>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Videos */}
          <TabsContent value="videos" className="space-y-8 data-[state=inactive]:hidden">
            {videos.map(({ id, title, link, tags, description, creator }) => (
              <div key={id} className="space-y-4 pb-8 border-b border-gray-200 last:border-none">
                <Link
                  href={link}
                  className="inline-flex items-start gap-2 group hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-bold group-hover:underline leading-tight flex-1">{title}</h3>
                  <ExternalLink className="h-4 w-4 mt-1 flex-shrink-0" />
                </Link>
                {creator && <p className="text-sm text-muted-foreground">{creator}</p>}
                <p className="text-muted-foreground leading-relaxed">{description}</p>
                <div className="pt-2">
                  <span className="text-xs text-muted-foreground">{tags.join(" | ")}</span>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Resources */}
          <TabsContent value="resources" className="space-y-8 data-[state=inactive]:hidden">
            {resources.map(({ id, title, link, tags, description }) => (
              <div key={id} className="space-y-4 pb-8 border-b border-gray-200 last:border-none">
                <Link
                  href={link}
                  className="inline-flex items-start gap-2 group hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-bold group-hover:underline leading-tight">{title}</h3>
                  <ExternalLink className="h-4 w-4 mt-1 flex-shrink-0" />
                </Link>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
                <div className="pt-2">
                  <span className="text-xs text-muted-foreground">{tags.join(" | ")}</span>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      {/* Hobbies & Interests Section */}
      <section id="hobbies" className="space-y-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Hobbies & Interests</h2>
          <p className="text-muted-foreground max-w text-lg">
            Creative and recreational activities that provide balance.
          </p>
        </div>

        <Tabs defaultValue="photography" className="w-full">
          <div className="border-b mb-8">
            <TabsList className="flex h-auto sm:h-10 items-center justify-start bg-transparent p-0 w-full overflow-x-auto flex-wrap sm:flex-nowrap">
              {hobbiesTabTriggers.map(({ value, label, Icon }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex items-center justify-center px-3 py-2 sm:px-4 text-sm font-medium data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:bg-muted/20 rounded-none bg-transparent whitespace-nowrap transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="photography" className="mt-6 data-[state=inactive]:hidden">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {photographyItems.map((item) => (
                  <Card key={item.id} className="border bg-card/50 backdrop-blur-sm overflow-hidden">
                    <div className="relative h-64 w-full">
                      <Image
                        src={item.image || "/placeholder.svg?width=400&height=256&query=Photography+Placeholder"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 leading-tight">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center pt-4">
                <Button variant="outline" asChild>
                  <Link
                    href="https://500px.com/p/alexkalergis?view=photos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    <span className="text-sm font-medium">My 500px Profile</span>
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="music" className="mt-6 data-[state=inactive]:hidden">
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Favorite Albums", items: favoriteAlbums },
                  { title: "Favorite Artists", items: ["Black Pumas", "KALEO", "Lumineers"] },
                  { title: "Favorite Genres", items: ["Alternative Rock", "Funk/Soul", "Jazz"] },
                ].map((section, idx) => (
                  <Card key={idx} className="border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4 leading-tight">{section.title}</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {section.items.map((item) => (
                          <li key={item} className="text-sm leading-relaxed flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center pt-6 mt-6 border-t border-border/30">
                <Button variant="outline" asChild>
                  <Link
                    href="https://open.spotify.com/user/hu63onxuj7b01pqcewmt2serx?si=a01d7c65ad344f6c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Music className="h-4 w-4" />
                    <span className="text-sm font-medium">My Spotify Profile</span>
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reading" className="mt-6 data-[state=inactive]:hidden">
            <div className="grid md:grid-cols-3 gap-8">
              {readingItems.map((item) => (
                <Card key={item.id} className="border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 leading-tight">{item.title}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {item.items.length > 0 ? (
                        item.items.map((book, index) => (
                          <li key={index} className="text-sm leading-relaxed flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0" />
                            <span>{book}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-muted-foreground italic">Coming soon...</li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="movies" className="mt-6 data-[state=inactive]:hidden">
            <div className="grid md:grid-cols-3 gap-8">
              {movieItems.map((item) => (
                <Card key={item.id} className="border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 leading-tight">{item.title}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {item.items.map((movie, index) => (
                        <li key={index} className="text-sm leading-relaxed flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0" />
                          <span>{movie}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sports" className="mt-6 data-[state=inactive]:hidden">
            <div className="grid md:grid-cols-3 gap-8">
              {sportsItems.map((item) => (
                <Card key={item.id} className="border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 leading-tight">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
