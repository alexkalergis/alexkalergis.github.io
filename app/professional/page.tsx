import { InteractiveHeader } from "@/components/header/interactive-header";
import { About } from "@/app/about/about";
import { Experience } from "@/app/experience/experience";
import { Projects } from "@/app/projects/projects";
import { Contact } from "@/app/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Education } from "../education/education";

export default function ProfessionalLibraryPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
