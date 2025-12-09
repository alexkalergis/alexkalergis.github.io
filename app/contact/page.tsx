import { InteractiveHeader } from "@/components/interactive-header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
