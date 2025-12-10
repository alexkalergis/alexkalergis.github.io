import { InteractiveHeader } from "@/components/header/interactive-header";
import { Experience } from "@/app/experience/experience";
import { Footer } from "@/components/footer/footer";

export default function ExperiencePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <Experience />
        <Footer />
      </main>
    </div>
  );
}
