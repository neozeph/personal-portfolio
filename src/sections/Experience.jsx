const experiences = [
  {
    period: "July 2026 - Present",
    role: "Software Development Training",
    company: "Independent Professional Development",
    description:
      "Strengthening my full-stack development expertise by building production-oriented projects, designing REST APIs, working with relational databases, implementing automated tests, and practicing modern deployment workflows.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Software Testing",
      "CI/CD",
    ],
    current: true,
  },
  {
    period: "August 2022 - June 2026",
    role: "Bachelor of Science in Computer Engineering",
    company: "Bulacan State University Main Campus",
    description:
      "Maintained a GPA of 1.13, Graduated as Summa Cum Laude, and consistently earned President’s Lister recognition from 2023–2026, while building strong foundations in software development, algorithms, cloud computing, and operating systems.",
    technologies: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Cloud Computing",
      "Operating Systems",
      "Embedded Systems",
      "DevOps",
    ],
    current: false,
  },
  {
    period: "June 2025 - July 2025",
    role: "Information Technology Intern",
    company: "PRIME Philippines",
    description:
      "Developed responsive and reusable frontend components using React.js and Tailwind CSS, collaborated with the UI/UX team to maintain design consistency, and improved application performance and usability through interface optimizations.",
    technologies: ["React.js", "Laravel"],
    current: false,
  },
  {
    period: "April 2025 - April 2026",
    role: "President",
    company:
      "Institute of Computer Engineers of the Philippines Student Edition BulSU Main",
    description:
      "Spearheaded organizational operations and facilitated major events supporting 400+ Computer Engineering students, coordinated internal communications, managed committees, and contributed to academic and technical events.",
    technologies: [
      "Leadership",
      "Event Management",
      "Communication",
      "Team Coordination",
    ],
    current: false,
  },
  {
    period: "April 2024 - April 2025",
    role: "Vice President for Internal Affairs",
    company:
      "Institute of Computer Engineers of the Philippines Student Edition BulSU Main",
    description:
      "Attended organizational meetings, coordinated internal activities, and contributed to the successful execution of organization events and initiatives.",
    technologies: [
      "Leadership",
      "Event Management",
      "Communication",
      "Internal Coordination",
    ],
    current: false,
  },
  {
    period: "July 2023 - June 2024",
    role: "Knowledge Management Officer",
    company:
      "Association of Engineering Youth for Sustainable Innovation (AEYSI BulSU)",
    description:
      "Organized learning resources for organization-wide initiatives and provided technical support during events and activities.",
    technologies: [
      "Social Media Management",
      "Technical Support",
      "Documentation",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Moving Background Blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
        style={{ animation: "slow-drift 5s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-light-blue/10 rounded-full blur-[100px] pointer-events-none"
        style={{ animation: "slow-drift 10s ease-in-out infinite reverse" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/**Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-gradient ">
            Experience that <br />
            <span className="font-serif italic font-normal text-white leading-normal pb-2">
              {" "}
              reflects my growth.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my journey from a curious beginner to a driven
            Computer Engineering student, developing skills through leadership
            roles, collaboration, and hands-on work in building meaningful
            systems and solutions.
          </p>
        </div>

        {/** TIMELINE */}
        <div className="relative ">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* EXPERIENCE ITEMS */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* TIMELINE DOT */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-80" />
                  )}
                </div>

                {/* CONTENT */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
