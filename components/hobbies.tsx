import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Camera, Music, Book, Bike, Film, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SpotifyNowPlaying } from "./spotify-now-playing"

export function Hobbies() {
  const photographyItems = [
    {
      id: 1,
      title: "Theater Act",
      description: 'Photographic documentation of a theatrical performance at "Εμπρός Theater"',
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Ενδιάμεσα Τοπία",
      description: 'Visual documentation of the group exhibition "Ενδιάμεσα Τοπία" at Mets Art Center',
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const readingItems = [
    {
      id: 1,
      title: "Favorite Books",
      content: "When Nietzsche Wept, Ikigai, Siddhartha, Logicomix, Elementary Aesthetics",
    },
    {
      id: 2,
      title: "Currently Reading",
      content: "Creative Act: A Way of Being, The Cafe on the Edge of the World",
    },
    {
      id: 3,
      title: "Favorite Genres",
      content: "Science Fiction, Philosophy, Popular Science",
    },
  ]

  const movieItems = [
    {
      id: 1,
      title: "Favorite Directors",
      content: "Christopher Nolan, Denis Villeneuve, Stanley Kubrick, Andrei Tarkovsky",
    },
    {
      id: 2,
      title: "Favorite Films",
      content: "Blade Runner 2049, Interstellar, 2001: A Space Odyssey, The Matrix, Arrival",
    },
    {
      id: 3,
      title: "Favorite Genres",
      content: "Science Fiction, Psychological Thrillers, Art House Cinema",
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
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Hobbies & Interests</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Beyond my professional life, I enjoy a variety of creative and recreational activities.
        </p>
      </div>

      <Tabs defaultValue="photography" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="photography" className="flex items-center gap-2">
            <Camera className="h-4 w-4" />
            <span className="hidden sm:inline">Photography</span>
          </TabsTrigger>
          <TabsTrigger value="music" className="flex items-center gap-2">
            <Music className="h-4 w-4" />
            <span className="hidden sm:inline">Music</span>
          </TabsTrigger>
          <TabsTrigger value="reading" className="flex items-center gap-2">
            <Book className="h-4 w-4" />
            <span className="hidden sm:inline">Reading</span>
          </TabsTrigger>
          <TabsTrigger value="movies" className="flex items-center gap-2">
            <Film className="h-4 w-4" />
            <span className="hidden sm:inline">Movies</span>
          </TabsTrigger>
          <TabsTrigger value="sports" className="flex items-center gap-2">
            <Bike className="h-4 w-4" />
            <span className="hidden sm:inline">Sports</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photography" className="mt-6">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {photographyItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link
                  href="https://500px.com/p/alexkalergis?view=photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  See more on 500px
                  <ExternalLink className="h-4 w-4 text-primary" />
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="music" className="mt-6">
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Currently Listening</h3>
                  <SpotifyNowPlaying />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Favorite Artists</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Black Pumas</p>
                    <p>• KALEO</p>
                    <p>• Lumineers</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Favorite Genres</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Alternative Rock</p>
                    <p>• Funk/Soul</p>
                    <p>• Jazz</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Find me on Spotify and Discogs to discover my music taste and vinyl collection
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <Link
                    href="https://open.spotify.com/user/alexkalergis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Spotify Profile
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://www.discogs.com/user/alexkalergis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Discogs Collection
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reading" className="mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {readingItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="movies" className="mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {movieItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sports" className="mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {sportsItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
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
