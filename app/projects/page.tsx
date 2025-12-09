import { InteractiveHeader } from "@/components/interactive-header";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
