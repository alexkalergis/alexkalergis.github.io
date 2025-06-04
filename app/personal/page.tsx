import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Personal } from "@/components/personal"
import { Hobbies } from "@/components/hobbies"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PersonalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="container py-24 md:py-32">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">Personal</h1>
              <p className="text-muted-foreground text-xl mt-2">
                A glimpse into my interests, hobbies, and the resources that inspire me.
              </p>
            </div>
          </div>
        </div>
        <Personal />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}
