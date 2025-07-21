import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const companies = [
  {
    name: "Ainigma Technologies",
    logo: "/images/ainigma-logo-v2.png", // Updated logo path
    role: "Software Engineer | Product Designer",
    startDate: "Jan 2025",
    endDate: "Present",
    location: "Athens, Greece",
    description: [
      "Designed the UX/UI for an EU-funded application, mapping user journeys and creating prototypes in Figma.",
      "Led the Product Design for a cross-platform healthcare app, utilizing Figma for user flows and UI prototypes.",
      "Maintained Frontend features using React and React Native, contributing to a responsive and accessible UX.",
      "Assisted in the design and setup of the company’s website using Figma and WordPress.",
      "Collaborated with cross-functional teams on product strategy, design systems, and feature planning.",
    ],
    website: "https://ainigma.tech",
  },
  {
    name: "Family Business",
    logo: "/images/family-business-logo-v2.png", // Updated logo path
    role: "IT & Assistant Manager",
    startDate: "Jan 2024",
    endDate: "Dec 2024",
    location: "Volos, Greece",
    description: [
      "Supervised the digital presence of our family business and managed IT requirements, ensuring optimal operation.",
      "Introduced new customer engagement strategies, improving experience and increasing revenue by 23.8%.",
      "Assisted in the strategic business’s successful transition, gaining experience in exit planning.",
      "Gained understanding of business operations, budget allocation, expense distribution and revenue management.",
    ],
    website: "#",
  },
  {
    name: "BuildUpLabs",
    logo: "/images/builduplabs-logo-new.webp", // Changed to use the new webp logo
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
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container space-y-16">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">My professional journey and career highlights.</p>
        </div>

        <div className="space-y-12">
          {companies.map((company, index, arr) => (
            <div key={index} className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div
                  className={`relative flex-shrink-0 ${
                    index === 0
                      ? "w-14 h-14 sm:w-16 sm:h-16" // Smallest for Ainigma
                      : index === 1
                        ? "w-16 h-16 sm:w-20 sm:h-20" // Medium for Family Business
                        : "w-20 h-20 sm:w-24 sm:h-24" // Default for others
                  }`}
                >
                  <Image
                    src={company.logo || "/placeholder.svg?width=96&height=96&query=Company+Logo"}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{company.role}</h3>
                      <div className="flex items-center gap-2">
                        {company.website !== "#" ? (
                          <Link
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium hover:text-foreground transition-colors inline-flex items-center gap-1"
                          >
                            {company.name}
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        ) : (
                          <span className="text-lg font-medium">{company.name}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground mt-1">{company.location}</p>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <span className="text-muted-foreground whitespace-nowrap">
                        {company.startDate} - {company.endDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 pl-0 sm:pl-28">
                {company.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
              {index < arr.length - 1 && <div className="pt-12 border-b border-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
