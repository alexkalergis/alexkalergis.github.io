"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type LibraryItem = {
  id: number;
  title: string;
  link: string;
  tags: string[];
  description: string;
  creator?: string;
  year?: number;
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
  },
  {
    id: 2,
    title: "How product design can change the world",
    link: "https://youtu.be/ZqeA_psKn2E",
    tags: ["Product Design", "Social Impact", "Innovation", "TED"],
    description:
      "Christiaan Maats shows how thoughtful product design can solve real-world problems and create positive social impact.",
    creator: "Christiaan Maats (TED)",
  },
];

const resources: LibraryItem[] = [
  {
    id: 1,
    title: "IDEO",
    link: "https://www.ideo.com",
    tags: ["Design Thinking", "Human-Centred Design", "Innovation"],
    description:
      "Global design consultancy that pioneered design-thinking methodology; their insights deeply inform my own design process.",
  },
  {
    id: 2,
    title: "Interaction Design Foundation",
    link: "https://www.interaction-design.org",
    tags: ["UX Design", "Education", "Design Theory"],
    description:
      "Comprehensive platform for UX education whose courses have been instrumental in developing my research and design skills.",
  },
];

const photographyItems = [
  {
    id: 1,
    title: "Theater Act",
    description:
      'Photographic documentation of a theatrical performance at "Εμπρός Theater"',
    image: "/images/theater-act.png",
  },
  {
    id: 2,
    title: "Ενδιάμεσα Τοπία",
    description:
      'Visual documentation of the group exhibition "Ενδιάμεσα Τοπία" at Mets Art Center',
    image: "/images/interim-landscapes.png",
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

export function Personal() {
  const [hobbiesTab, setHobbiesTab] = useState("photography");
  const [interestsTab, setInterestsTab] = useState("papers");

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

  return (
    <div className="flex justify-center items-center gap-[10px] self-stretch">
      <div className="flex flex-col items-start gap-[100px] flex-1">
        <div className="flex flex-col items-start gap-[25px] self-stretch">
          <h2 className="self-stretch text-[#000] font-mono text-[40px] font-bold leading-normal">
            Hobbies
          </h2>
          <p className="self-stretch text-[#000] text-justify font-mono text-[18px] font-normal leading-normal">
            Creative activities that excites me.
          </p>

          <div className="flex p-[15px] justify-end items-center gap-[50px] rounded-lg border-b border-[#D9D9D9] self-stretch">
            {hobbiesTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setHobbiesTab(tab.value)}
                className={`text-center font-mono text-[18px] leading-normal ${
                  hobbiesTab === tab.value
                    ? "font-bold underline text-[#000]"
                    : "font-normal text-[#000]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex h-[342px] items-start gap-[10px] self-stretch">
            {currentHobbyItems.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="flex p-[10px] flex-col items-start gap-[25px] flex-1 self-stretch rounded-lg border border-[#D9D9D9]"
              >
                <div className="flex-1 self-stretch relative bg-gray-100 rounded overflow-hidden">
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

          <div className="flex flex-col justify-center items-center gap-[10px] self-stretch">
            <Button
              variant="outline"
              asChild
              className="flex p-[15px_25px] justify-center items-center gap-[10px] rounded-lg border border-[#D9D9D9]"
            >
              <Link
                href="https://500px.com/p/alexkalergis?view=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000] text-justify font-mono text-[16px] font-medium leading-normal"
              >
                Follow me on 500px
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[25px] self-stretch">
          <h2 className="self-stretch text-[#000] font-mono text-[40px] font-bold leading-normal">
            Interests
          </h2>
          <p className="self-stretch text-[#000] text-justify font-mono text-[18px] font-normal leading-normal">
            A curated collection that inspires me.
          </p>

          <div className="flex p-[15px] justify-end items-center gap-[50px] rounded-lg border-b border-[#D9D9D9] self-stretch">
            {interestsTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setInterestsTab(tab.value)}
                className={`text-center font-mono text-[18px] leading-normal ${
                  interestsTab === tab.value
                    ? "font-bold underline text-[#000]"
                    : "font-normal text-[#000]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex h-[342px] items-start gap-[10px] self-stretch">
            {currentInterestItems.slice(0, 2).map((item) => (
              <Link
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex p-[10px] flex-col items-start gap-[25px] flex-1 self-stretch rounded-lg border border-[#D9D9D9] hover:border-[#999] transition-colors"
              >
                <div className="flex-1 self-stretch relative bg-gray-100 rounded overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={item.title}
                    fill
                    className="object-cover"
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

          <div className="flex flex-col justify-center items-center gap-[10px] self-stretch">
            <Button
              variant="outline"
              className="flex p-[15px_25px] justify-center items-center gap-[10px] rounded-lg border border-[#D9D9D9]"
            >
              <span className="text-[#000] text-justify font-mono text-[16px] font-medium leading-normal">
                Show more
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
