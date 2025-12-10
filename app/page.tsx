import { InteractiveHeader } from "@/components/header/interactive-header";
import { Hero } from "@/app/hero/hero";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-hidden">
        <Hero />
      </main>
    </div>
  );
}
