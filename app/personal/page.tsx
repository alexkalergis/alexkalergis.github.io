"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { InteractiveHeader } from "@/components/header/interactive-header";
import { Footer } from "@/components/footer/footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type LibraryItem = {
  id: number;
  title: string;
  link: string;
  tags: string[];
  description: string;
  creator?: string;
  year?: number;
  image?: string;
};

const papers: LibraryItem[] = [
  {
    id: 1,
    title: "Aesthetics and the Art of Engineering",
    link: "https://www.researchgate.net/publication/276314506_Aesthetics_and_the_Art_of_Engineering",
    tags: [
      "Engineering",
      "Aesthetics",
      "Design Philosophy",
      "Engineering Education",
      "Polytechnic",
    ],
    description:
      "Explores the historical relationship between engineering and aesthetics and argues for reintegrating aesthetic considerations into engineering curricula.",
    creator: "Per Boelskifte",
    year: 2014,
    image: "/images/PersonalLibrary/Interests/ResearchGate.png",
  },
];

const videos: LibraryItem[] = [
  {
    id: 1,
    title: "The first secret of great design",
    link: "https://youtu.be/9uOMectkCCs",
    tags: ["Design", "Innovation", "Product Design", "TED"],
    description:
      "Tony Fadell shares tips on noticing everyday details to uncover opportunities for meaningful design improvements.",
    creator: "Tony Fadell (TED)",
    image: "/images/PersonalLibrary/Interests/TED.png",
  },
  {
    id: 2,
    title: "How product design can change the world",
    link: "https://youtu.be/ZqeA_psKn2E",
    tags: ["Product Design", "Social Impact", "Innovation", "TED"],
    description:
      "Christiaan Maats shows how thoughtful product design can solve real-world problems and create positive social impact.",
    creator: "Christiaan Maats (TED)",
    image: "/images/PersonalLibrary/Interests/TEDxUniversityofGroningen.png",
  },
];

const resources: LibraryItem[] = [
  {
    id: 1,
    title: "IDEO",
    link: "https://www.ideo.com",
    tags: ["Design Thinking", "Human-Centred Design", "Innovation"],
    description:
      "Global design consultancy that pioneered design-thinking methodology.",
    image: "/images/PersonalLibrary/Interests/IDEO.png",
  },
  {
    id: 2,
    title: "Interaction Design Foundation",
    link: "https://www.interaction-design.org",
    tags: ["UX Design", "Education", "Design Theory"],
    description: "Comprehensive platform for UX education design skills.",
    image: "/images/PersonalLibrary/Interests/InteractionDesignFoundation.png",
  },
];

const photographyItems = [
  {
    id: 1,
    title: "Theater Act | Εμπρός Theater",
    description: "Theatrical performance in Athens, Greece",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Ενδιάμεσα Τοπία | Mets Art Center",
    description: "Art exhibition in Athens, Greece",
    image: "/placeholder.svg",
  },
];

const drawingItems = [
  {
    id: 1,
    title: "Digital Illustrations",
    description: "Various digital art pieces and sketches",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Character Designs",
    description: "Character concept art and studies",
    image: "/placeholder.svg",
  },
];

const cinemaItems = [
  {
    id: 1,
    title: "Avatar",
    description: "Science Fiction | Fantasy",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Spirited Away",
    description: "Animation | Fantasy",
    image: "/placeholder.svg",
  },
];

const readingItems = [
  {
    id: 1,
    title: "When Nietzsche Wept",
    description: "Philosophy | Fiction",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Ikigai",
    description: "Self-help | Philosophy",
    image: "/placeholder.svg",
  },
];

export default function PersonalLibraryPage() {
  const [hobbiesTab, setHobbiesTab] = useState("photography");
  const [interestsTab, setInterestsTab] = useState("papers");
  const [showAllHobbies, setShowAllHobbies] = useState(false);
  const [showAllInterests, setShowAllInterests] = useState(false);
  const [hasMoreHobbies, setHasMoreHobbies] = useState(false);
  const [hasMoreInterests, setHasMoreInterests] = useState(false);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const hobbiesTabs = [
    { value: "photography", label: "Photography", items: photographyItems },
    { value: "drawing", label: "Drawing", items: drawingItems },
    { value: "cinema", label: "Cinema", items: cinemaItems },
    { value: "reading", label: "Reading", items: readingItems },
  ];

  const interestsTabs = [
    { value: "papers", label: "Papers", items: papers },
    { value: "videos", label: "Videos", items: videos },
    { value: "resources", label: "Resources", items: resources },
  ];

  const currentHobbyItems =
    hobbiesTabs.find((tab) => tab.value === hobbiesTab)?.items || [];
  const currentInterestItems =
    interestsTabs.find((tab) => tab.value === interestsTab)?.items || [];

  useEffect(() => {
    const checkOverflow = () => {
      if (hobbiesRef.current) {
        const section = hobbiesRef.current;
        const hasOverflow = section.scrollHeight > window.innerHeight - 200; // Account for header/footer
        setHasMoreHobbies(hasOverflow && !showAllHobbies);
      }
      if (interestsRef.current) {
        const section = interestsRef.current;
        const hasOverflow = section.scrollHeight > window.innerHeight - 200;
        setHasMoreInterests(hasOverflow && !showAllInterests);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [hobbiesTab, interestsTab, showAllHobbies, showAllInterests]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <InteractiveHeader />
      <main className="flex-grow overflow-auto">
        <div className="container py-24 space-y-24">
          <section id="hobbies" className="space-y-16" ref={hobbiesRef}>
            <div className="space-y-6">
              <h2 className="font-bold text-[2.5rem]">Hobbies</h2>
              <p className="text-muted-foreground max-w-3xl text-lg">
                Creative activities that excites me.
              </p>
            </div>

            <Tabs
              defaultValue="photography"
              value={hobbiesTab}
              onValueChange={(value) => {
                setHobbiesTab(value);
                setShowAllHobbies(false);
              }}
            >
              <TabsList className="w-full justify-start">
                {hobbiesTabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {hobbiesTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tab.items.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="flex p-[10px] flex-col items-start gap-[25px] h-[342px] rounded-lg border border-[#D9D9D9]"
                      >
                        <div className="flex-1 self-stretch relative bg-transparent rounded overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[10px] self-stretch">
                          <div className="self-stretch text-[#000] text-center font-mono text-[14px] font-bold leading-normal">
                            {item.title}
                          </div>
                          <div className="self-stretch text-[#000] text-center font-mono text-[14px] font-medium leading-normal">
                            {item.description}
                          </div>
                          <div className="self-stretch text-[#000] text-center font-mono text-[14px] font-normal leading-normal">
                            {hobbiesTab === "photography"
                              ? "Photography"
                              : hobbiesTab === "drawing"
                              ? "Art"
                              : hobbiesTab === "cinema"
                              ? "Film"
                              : "Literature"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {hasMoreHobbies && (
                    <div className="flex flex-col justify-center items-center gap-[10px] self-stretch mt-6">
                      <button
                        onClick={() => setShowAllHobbies(true)}
                        className="flex px-[25px] py-[15px] justify-center items-center gap-[10px] rounded-lg border border-[#D9D9D9] hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[#000] text-justify font-mono text-[16px] font-medium leading-normal">
                          Show more
                        </span>
                      </button>
                    </div>
                  )}

                  {showAllHobbies && (
                    <div className="flex flex-col justify-center items-center gap-[10px] self-stretch mt-6">
                      <Link
                        href="https://500px.com/p/alexkalergis?view=photos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex px-[25px] py-[15px] justify-center items-center gap-[10px] rounded-lg border border-[#D9D9D9] hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[#000] text-justify font-mono text-[16px] font-medium leading-normal">
                          Follow me on 500px
                        </span>
                      </Link>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </section>

          <section id="interests" className="space-y-16" ref={interestsRef}>
            <div className="space-y-6">
              <h2 className="font-bold text-[2.5rem]">Interests</h2>
              <p className="text-muted-foreground max-w-3xl text-lg">
                A curated collection that inspires me.
              </p>
            </div>

            <Tabs
              defaultValue="papers"
              value={interestsTab}
              onValueChange={(value) => {
                setInterestsTab(value);
                setShowAllInterests(false);
              }}
            >
              <TabsList className="w-full justify-start">
                {interestsTabs.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {interestsTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tab.items.slice(0, 3).map((item) => (
                      <Link
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex p-[10px] flex-col items-start gap-[25px] h-[342px] rounded-lg border border-[#D9D9D9] hover:border-[#999] transition-colors"
                      >
                        <div className="flex-1 self-stretch relative bg-transparent rounded overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-[10px] self-stretch">
                          <div className="self-stretch text-[#000] text-center font-mono text-[14px] font-bold leading-normal">
                            {item.title}
                            {item.year && ` | ${item.year}`}
                          </div>
                          <div className="self-stretch text-[#000] text-center font-mono text-[14px] font-medium leading-normal">
                            {item.creator || item.description}
                          </div>
                          <div className="self-stretch text-[#000] text-center font-mono text-[14px] font-normal leading-normal">
                            {item.tags.slice(0, 3).join(" | ")}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {hasMoreInterests && (
                    <div className="flex flex-col justify-center items-center gap-[10px] self-stretch mt-6">
                      <button
                        onClick={() => setShowAllInterests(true)}
                        className="flex px-[25px] py-[15px] justify-center items-center gap-[10px] rounded-lg border border-[#D9D9D9] hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[#000] text-justify font-mono text-[16px] font-medium leading-normal">
                          Show more
                        </span>
                      </button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
