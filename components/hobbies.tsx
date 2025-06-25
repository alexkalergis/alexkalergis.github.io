import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Camera, Music, Book, Bike, Film, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hobbies() {
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
    {
      id: 2,
      title: "Currently Reading",
      items: ["Creative Act: A Way of Being", "The Cafe on the Edge of the World"],
    },
    {
      id: 3,
      title: "Favorite Genres",
      items: ["Science Fiction", "Philosophy", "Popular Science"],
    },
  ]

  const movieItems = [
    {
      id: 1,
      title: "Favorite Universes",
      items: ["Avatar", "Harry Potter", "Star Wars", "Pirates of the Caribbean"],
    },
    {
      id: 2,
      title: "Favorite Movies",
      items: ["Spirited Away", "A beautiful mind", "Other me"],
    },
    {
      id: 3,
      title: "Favorite Genres",
      items: ["Science Fiction", "Thriller", "Fantasy"],
    },
  ]

  const sportsItems = [
    {
      id: 1,
      title: "Cycling",
      content: "Weekend rides around the countryside, occasional city commuting",
    },
    {
      id: 2,
      title: "Hiking",
      content: "Exploring mountain trails and natural parks",
    },
    {
      id: 3,
      title: "Swimming",
      content: "Regular swimming sessions at local beaches during summer",
    },
  ]

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
          <TabsList className="flex h-10 items-center justify-start bg-transparent p-0 w-full overflow-x-auto">
            <TabsTrigger
              value="photography"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <Camera className="h-4 w-4 mr-2" />
              Photography
            </TabsTrigger>
            <TabsTrigger
              value="music"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <Music className="h-4 w-4 mr-2" />
              Music
            </TabsTrigger>
            <TabsTrigger
              value="reading"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <Book className="h-4 w-4 mr-2" />
              Reading
            </TabsTrigger>
            <TabsTrigger
              value="movies"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <Film className="h-4 w-4 mr-2" />
              Movies
            </TabsTrigger>
            <TabsTrigger
              value="sports"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none bg-transparent"
            >
              <Bike className="h-4 w-4 mr-2" />
              Sports
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="photography" className="mt-6">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {photographyItems.map((item) => (
                <div key={item.id} className="space-y-4">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden border">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
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
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v1h-1v-1zm-3 0h1v1h-1v-1z" />
                    <path d="M12.5 7c-1.381 0-2.5-1.119-2.5-2.5S11.119 2 12.5 2s2.5 1.119 2.5 2.5S13.881 7 12.5 7z" />
                    <path d="M12 13c-4.411 0-8 3.589-8 8h16c0-4.411-3.589-8-8-8z" />
                  </svg>
                  See more on 500px
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="music" className="mt-6">
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Favorite Albums</h3>
                <div className="space-y-2 text-muted-foreground">
                  {favoriteAlbums.map((album) => (
                    <p key={album}>• {album}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Favorite Artists</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Black Pumas</p>
                  <p>• KALEO</p>
                  <p>• Lumineers</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Favorite Genres</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Alternative Rock</p>
                  <p>• Funk/Soul</p>
                  <p>• Jazz</p>
                </div>
              </div>
            </div>
            <div className="text-center pt-4 border-t border-border/50">
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
              <div key={item.id} className="space-y-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="space-y-2 text-muted-foreground">
                  {item.items.map((book, index) => (
                    <p key={index}>• {book}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="movies" className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {movieItems.map((item) => (
              <div key={item.id} className="space-y-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="space-y-2 text-muted-foreground">
                  {item.items.map((movie, index) => (
                    <p key={index}>• {movie}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sports" className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {sportsItems.map((item) => (
              <div key={item.id} className="space-y-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
