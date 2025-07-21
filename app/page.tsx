import HeaderShell from "@/components/header-shell"
import HeaderClient from "@/components/header-client"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderShell />
      {/* client overlay */}
      <HeaderClient />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
