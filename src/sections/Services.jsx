import { ServiceCard } from "@/components/ServiceCard";
import { Code2, Workflow, Palette, Cpu, Cloud, Users } from "lucide-react";

export const services = [
  {
    icon: Code2,
    image: "/services/software.webp",
    title: "Software Development",
    description:
      "Building responsive web applications and scalable software solutions.",
    tech: ["React", "Python", "PHP", "MySQL"],
  },

  {
    icon: Workflow,
    image: "/services/automation.webp",
    title: "Process Automation",
    description: "Automating workflows and streamlining operations.",
    tech: ["Python", "GitHub Actions"],
  },

  {
    icon: Palette,
    image: "/services/design.webp",
    title: "UI Design & Layouting",
    description:
      "Designing interfaces, marketing materials, and digital experiences.",
    tech: ["Figma", "Canva", "Illustrator"],
  },

  {
    icon: Cpu,
    image: "/services/embedded.webp",
    title: "Embedded Systems",
    description: "Integrating hardware and software solutions.",
    tech: ["C++", "Python"],
  },

  {
    icon: Cloud,
    image: "/services/cloud.webp",
    title: "DevOps & Cloud",
    description: "Exploring Linux, Docker, AWS, and deployment pipelines.",
    tech: ["Docker", "Linux", "AWS"],
  },

  {
    icon: Users,
    image: "/services/leadership.webp",
    title: "Leadership",
    description: "Leading teams and collaborating on impactful projects.",
    tech: ["Leadership", "Planning"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            What I Bring To The Table
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient pb-2 animate-fade-in ">
            Turning ideas into
            <br />
            <span className="font-serif italic font-normal text-white">
              {" "}
              digital solutions.
            </span>
            
          </h2>

          <p className="mt-6 text-muted-foreground text-lg animation-delay-100">
            Combining software development, automation, engineering, design, and
            continuous learning to build meaningful solutions that create
            impact.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
    flex
    flex-wrap
    justify-center
    gap-4 animate-fade-in animation-delay-200
  "
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
