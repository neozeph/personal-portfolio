import { ServiceCard } from "@/components/ServiceCard";
import { Code2, Workflow, Palette, Cpu, Cloud, Users } from "lucide-react";

const services = [
  {
    icon: Code2,
    image: "/services/software.webp",
    title: "Web Development",
    description:
      "Building responsive, accessible, and maintainable web applications from interface to database.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    icon: Workflow,
    image: "/services/automation.webp",
    title: "Workflow Automation",
    description:
      "Creating practical automations that reduce repetitive work and connect everyday tools.",
    tech: ["Python", "GitHub Actions"],
  },
  {
    icon: Palette,
    image: "/services/design.webp",
    title: "UI/UX & Visual Design",
    description:
      "Transforming ideas into clear interfaces, responsive layouts, and purposeful visual content.",
    tech: ["Figma", "Canva", "Illustrator", "Tailwind CSS"],
  },
  {
    icon: Cpu,
    image: "/services/embedded.webp",
    title: "Embedded Systems",
    description:
      "Developing hardware and software integrations for automation, control, and monitoring systems.",
    tech: ["C++", "Python", "Raspberry Pi", "Microcontrollers"],
  },
  {
    icon: Cloud,
    image: "/services/cloud.webp",
    title: "Deployment & DevOps",
    description:
      "Setting up application deployments, containerized environments, and automated development workflows.",
    tech: ["Docker", "Linux Basics", "CI/CD"],
  },
  {
    icon: Users,
    image: "/services/leadership.webp",
    title: "Project Leadership",
    description:
      "Organizing teams, coordinating technical projects, and turning shared goals into actionable plans.",
    tech: ["Team Leadership", "Planning", "Documentation"],
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
    mx-auto
    grid
    max-w-[1440px]
    grid-cols-2
    gap-3
    sm:grid-cols-3
    sm:gap-4
    xl:grid-cols-6
    animate-fade-in
    animation-delay-200
  "
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
