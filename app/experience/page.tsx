import { InteractiveHeader } from "@/components/interactive-header";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

export default function ExperiencePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
