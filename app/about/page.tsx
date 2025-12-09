import { InteractiveHeader } from "@/components/interactive-header";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
