import { InteractiveHeader } from "@/components/header/interactive-header";
import { Projects } from "@/app/projects/projects";
import { Footer } from "@/components/footer/footer";

export default function ProjectsPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
