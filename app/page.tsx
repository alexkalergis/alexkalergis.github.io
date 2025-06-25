import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {" "}
      {/* Added flex flex-col for footer positioning */}
      <Header />
      <main className="flex-grow">
        {" "}
        {/* Added flex-grow to push footer down */}
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
