import { InteractiveHeader } from "@/components/header/interactive-header";
import { About } from "@/app/about/about";
import { Contact } from "@/app/contact/contact";
import { Footer } from "@/components/footer/footer";

export default function AboutPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
