import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Camera, Music, Book, Bike, Film } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SpotifyNowPlaying } from "./spotify-now-playing"

export function Hobbies() {
  const photographyItems = [
    {
      id: 1,
      title: "Theater Act",
      description: 'Photographic documentation of a theatrical performance at "Εμπρός Theater"',
      image: "/images/theater-act.png", // Updated path
    },
    {
      id: 2,
      title: "Ενδιάμεσα Τοπία",
      description: 'Visual documentation of the group exhibition "Ενδιάμεσα Τοπία" at Mets Art Center',
      image: "/images/interim-landscapes.png", // Updated path
    },
  ]

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
          </div>
        </TabsContent>

        <TabsContent value="reading" className="mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {readingItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    {item.items.map((book, index) => (
                      <p key={index}>• {book}</p>
                    ))}
                  </div>
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
                  <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    {item.items.map((movie, index) => (
                      <p key={index}>• {movie}</p>
                    ))}
                  </div>
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
