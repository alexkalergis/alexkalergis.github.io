import { InteractiveHeader } from "@/components/interactive-header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
