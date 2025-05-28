import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Music, Book, Gamepad, Bike } from "lucide-react"
import Image from "next/image"

export function Hobbies() {
  const photographyItems = [
    {
      id: 1,
      title: "Sunset at the Beach",
      description: "Captured during golden hour at a local beach",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Urban Architecture",
      description: "Modern buildings in downtown Athens",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Mountain Landscape",
      description: "Hiking trip in the mountains of Greece",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Street Photography",
      description: "Capturing everyday life in the city",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const musicItems = [
    {
      id: 1,
      title: "Favorite Artists",
      content: "Pink Floyd, Radiohead, Tool, Porcupine Tree, Opeth",
    },
    {
      id: 2,
      title: "Instruments",
      content: "Guitar, Piano basics",
    },
    {
      id: 3,
      title: "Concerts Attended",
      content: "Over 30 live performances across Europe",
    },
  ]

  const readingItems = [
    {
      id: 1,
      title: "Favorite Books",
      content: "Dune by Frank Herbert, 1984 by George Orwell, The Hitchhiker's Guide to the Galaxy by Douglas Adams",
    },
    {
      id: 2,
      title: "Current Reading",
      content: "The Three-Body Problem by Liu Cixin",
    },
    {
      id: 3,
      title: "Favorite Genres",
      content: "Science Fiction, Philosophy, Popular Science",
    },
  ]

  const gamingItems = [
    {
      id: 1,
      title: "Favorite Games",
      content: "The Witcher 3, Dark Souls series, Civilization VI, Factorio",
    },
    {
      id: 2,
      title: "Platforms",
      content: "PC, PlayStation",
    },
    {
      id: 3,
      title: "Game Jams",
      content: "Participated in 3 game jams, creating small indie games",
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
          <TabsTrigger value="gaming" className="flex items-center gap-2">
            <Gamepad className="h-4 w-4" />
            <span className="hidden sm:inline">Gaming</span>
          </TabsTrigger>
          <TabsTrigger value="sports" className="flex items-center gap-2">
            <Bike className="h-4 w-4" />
            <span className="hidden sm:inline">Sports</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photography" className="mt-6">
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
        </TabsContent>

        <TabsContent value="music" className="mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {musicItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
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

        <TabsContent value="gaming" className="mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {gamingItems.map((item) => (
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
