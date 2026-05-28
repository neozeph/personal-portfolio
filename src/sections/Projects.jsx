import * as Lucide from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "BulSU COE Alumni Tracker Website",
    description: "The website is a responsive web application developed as a project in Web Engineering, designed with a simple and intuitive UI for redirecting alumni forms. It provides essential information about Bulacan State University College of Engineering while integrating thoughtful UI/UX design principles and implemented using React.js and TypeScript.",
    image: "/projects/project-1.png",
    tags: [
      { name: "React.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }
    ],
    link: "https://bsu-alumni-tracker.vercel.app/",
    github: "https://github.com/neozeph/bsu-alumni-tracker",
  },
  {
    title: "DevOps CSV Automation",
    description: "The DevOps CSV Automation project is an automated data processing pipeline for CSV files designed to streamline ingestion, cleaning, formatting, and visualization of raw sales data. It demonstrates a complete DevOps lifecycle through CI/CD integration, automated testing, linting, security scanning, and GitHub Actions-based automation for continuous data updates. The system reduces manual processing effort and errors while improving data quality, enabling faster and more reliable data-driven decision-making for analytics workflows.",
    image: "/projects/project-2.png",
    tags: [
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "CSV Handling", icon: Lucide.FileText },
      { name: "Automation", icon: Lucide.Settings },
      { name: "GitHub Actions", icon: Lucide.GitBranch }
    ],
    link: "https://github.com/neozeph/devops-csv-automation/tree/main/output",
    github: "https://github.com/neozeph/devops-csv-automation",
  },
  {
    title: "SkyLinx: Flight Booking App",
    description: "The mobile application is a flight booking platform designed with a smooth and responsive user interface, featuring intuitive layouts and navigation to enhance the overall user experience for searching, booking, and managing flights.",
    image: "/projects/project-3.jpg",
    tags: [
      { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      { name: "Dart", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
      { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" }
    ],
    link: "https://drive.google.com/drive/folders/1zQktMOJ4q9SzBvVx4XZqcROd1UevD6MK?usp=sharing",
    github: "https://github.com/asmodeus-p/skylinx",
  },
  {
    title: "ROKI: Room Checker",
    description: "The project is a room-checking system mockup for the College of Engineering, designed in Wix Studio as part of a Software Design project, featuring a user-friendly interface for monitoring and managing room availability.",
    image: "/projects/project-4.png",
    tags: [
      { name: "Wix Studio", icon: Lucide.LayoutTemplate }
    ],
    link: "https://filesofjosef.wixstudio.com/softwaredesign",
    github: "https://filesofjosef.wixstudio.com/softwaredesign",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden ">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-gradient">
            Projects driven <br/>
            <span className="font-serif italic font-normal text-white">
              {" "}
              by curiosity and innovation.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A growing collection of software, systems, and ideas designed to create meaningful experiences and impact.
          </p>
        </div>

        {/* projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Lucide.ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Lucide.FolderGit2 className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Lucide.ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag.image ? (
                        <img src={tag.image} alt={tag.name} className="w-3.5 h-3.5 object-contain" />
                      ) : tag.icon ? (
                        <tag.icon className="w-3.5 h-3.5" />
                      ) : null}
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <Lucide.ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
};
