import { Footer } from "@/components/footer"
import { Personal } from "@/components/personal"
import { Hobbies } from "@/components/hobbies"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PersonalPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Button variant="ghost" size="icon" asChild className="mr-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Personal</h1>
          </div>
        </div>
      </div>
      <main>
        <div className="container py-12 md:py-16">
          <p className="text-muted-foreground text-lg max-w-3xl">
            A glimpse into my interests, hobbies, and the resources that inspire me.
          </p>
        </div>
        <Personal />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
