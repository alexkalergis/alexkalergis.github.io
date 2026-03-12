import { InteractiveHeader } from "@/components/header/interactive-header";
import { Hero } from "@/app/hero/hero";
import { About } from "@/app/about/about";
import { Education } from "@/app/education/education";
import { Experience } from "@/app/experience/experience";
import { Projects } from "@/app/projects/projects";
import { Contact } from "@/app/contact/contact";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <InteractiveHeader />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
