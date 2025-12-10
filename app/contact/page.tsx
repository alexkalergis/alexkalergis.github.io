import { InteractiveHeader } from "@/components/header/interactive-header";
import { Contact } from "@/app/contact/contact";
import { Footer } from "@/components/footer/footer";

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
