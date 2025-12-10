"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "maMEDS",
    logo: "/images/Experience/maMEDS.png",
    role: "Software Engineer | Product Designer",
    startDate: "Jul 2025",
    endDate: "Present",
    location: "Athens, Greece",
    description: [
      "Led the Product Design of maMEDS, using Figma for user flows and UI prototypes.",
      "Maintained Frontend features using React and React Native, contributing to a responsive and accessible UX.",
      "Assisted in the design and setup of the company's website using Figma and React.",
      "Collaborated with cross-functional teams on product strategy, design systems, and feature planning.",
    ],
    website: "https://mameds.gr",
  },
  {
    name: "Ainigma Technologies",
    logo: "/images/Experience/AinigmaTechnologies.png",
    role: "Software Engineer | Product Designer",
    startDate: "Jan 2025",
    endDate: "Present",
    location: "Athens, Greece",
    description: [
      "Designed the UX/UI for an EU-funded application, mapping user journeys and creating prototypes in Figma.",
      "Led the Product Design for a cross-platform healthcare app, utilizing Figma for user flows and UI prototypes.",
      "Maintained Frontend features using React and React Native, contributing to a responsive and accessible UX.",
      "Assisted in the design and setup of the company's website using Figma and WordPress.",
    ],
    website: "https://ainigma.tech",
  },
  {
    name: "Family Business",
    logo: "/images/Experience/FamilyBusiness.png",
    role: "IT & Assistant Manager",
    startDate: "Jan 2024",
    endDate: "Dec 2024",
    location: "Volos, Greece",
    description: [
      "Supervised the digital presence of our family business and managed IT requirements, ensuring optimal operation.",
      "Introduced new customer engagement strategies, improving experience and increasing revenue by 23.8%.",
      "Assisted in the strategic business's successful transition, gaining experience in exit planning.",
      "Gained understanding of business operations, budget allocation, expense distribution and revenue management.",
    ],
    website: "#",
  },
  {
    name: "BuildUpLabs",
    logo: "/images/Experience/BuildUpLabs.png",
    role: "Product Design Intern",
    startDate: "Oct 2023",
    endDate: "Jan 2024",
    location: "Lisbon, Portugal",
    description: [
      "Led the ideation and design of an AI digital product that suggests best business models using Figma.",
      "Developed a minimum viable product (MVP) using Retool and OpenAI API to ensure strategic objectives.",
      "Gained experience in digital product lifecycle, UX Design, coding, Agile methodologies, and collaboration skills.",
    ],
    website: "https://builduplabs.com",
  },
];

export function Experience() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24">
      <div className="container space-y-16">
        <div className="space-y-6">
          <h2 className="font-bold text-5xl">Experience</h2>
          <p className="text-muted-foreground max-w-3xl text-lg">
            My professional journey and career highlights.
          </p>
        </div>

        <div className="space-y-8">
          {companies.map((company, index, arr) => {
            const isExpanded = expandedItems.includes(index);

            return (
              <div key={index} className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Fixed container size for all logos */}
                  <div className="relative flex-shrink-0 w-20 h-20 sm:w-14 sm:h-14 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={
                          company.logo ||
                          "/placeholder.svg?width=96&height=96&query=Company+Logo"
                        }
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold mb-1 font-mono text-xl">
                          {company.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          {company.website !== "#" ? (
                            <Link
                              href={company.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium hover:text-foreground transition-colors inline-flex items-center gap-1 text-base"
                            >
                              {company.name}
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          ) : (
                            <span className="font-medium text-base">
                              {company.name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-left sm:text-right mt-2 sm:mt-0 flex flex-col">
                        <span className="text-muted-foreground whitespace-nowrap">
                          {company.startDate} - {company.endDate}
                        </span>
                        <span className="text-muted-foreground text-sm mt-1">
                          {company.location}
                        </span>
                      </div>
                    </div>

                    {/* View More Button */}
                    <div className="mt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(index)}
                        className="text-muted-foreground p-0 h-auto font-normal hover:bg-transparent"
                      >
                        <span className="text-sm">
                          View {isExpanded ? "less" : "more"}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expandable Description */}
                {isExpanded && (
                  <ul className="space-y-3 pl-0 animate-in slide-in-from-top-2 duration-200 sm:pl-20 text-left text-sm font-normal">
                    {company.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground flex gap-3 items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full flex-shrink-0 mt-0" />
                        <span className="flex-1 text-black">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {index < arr.length - 1 && (
                  <div className="pt-4 border-b border-gray-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
