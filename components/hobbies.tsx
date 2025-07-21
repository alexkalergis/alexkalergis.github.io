import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Music, Book, Bike, Film, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

const tabTriggers = [
  { value: "photography", label: "Photography", Icon: Camera },
  { value: "music", label: "Music", Icon: Music },
  { value: "reading", label: "Reading", Icon: Book },
  { value: "movies", label: "Movies", Icon: Film },
  { value: "sports", label: "Sports", Icon: Bike },
]

export function Hobbies() {
  return (
    <section id="hobbies" className="container py-24 space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Hobbies & Interests</h2>
        <p className="text-xl text-muted-foreground">
          Creative and recreational activities that fuel my creativity and provide balance.
        </p>
      </div>

      <Tabs defaultValue="photography" className="w-full">
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

        <TabsContent value="photography" className="mt-6">
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
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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
                  My 500px Profile
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="music" className="mt-6">
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Favorite Albums", items: favoriteAlbums },
                { title: "Favorite Artists", items: ["Black Pumas", "KALEO", "Lumineers"] },
                { title: "Favorite Genres", items: ["Alternative Rock", "Funk/Soul", "Jazz"] },
              ].map((section, idx) => (
                <Card key={idx} className="border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                    <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
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
                  My Spotify Profile
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reading" className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {readingItems.map((item) => (
              <Card key={item.id} className="border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                    {item.items.map((book, index) => (
                      <li key={index}>{book}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="movies" className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {movieItems.map((item) => (
              <Card key={item.id} className="border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-1 text-muted-foreground list-disc list-inside">
                    {item.items.map((movie, index) => (
                      <li key={index}>{movie}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sports" className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {sportsItems.map((item) => (
              <Card key={item.id} className="border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
