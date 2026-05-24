import { Code2, Cpu, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solving",
    description:
      "Passionate about building practical and efficient solutions for real-world challenges.",
  },
  {
    icon: Cpu,
    title: "Continuous Learning",
    description:
      "Always exploring modern technologies, AI, cybersecurity, and cloud computing to grow as a developer.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Thrives in team environments where ideas, creativity, and innovation come together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Driven by curiosity and motivated to create meaningful digital experiences through modern technology.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About ME</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Designing the future
              <span className="font-serif italic font-normal text-white"> with code, creativity, and purpose.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a graduating Computer Engineering student passionate about building practical and user-centered software solutions. 
                My interest in technology started from a curiosity about how systems work, 
                which gradually grew into a passion for creating applications that are both functional and impactful.
              </p>
              <p>
                I work with technologies such as React, Flutter, Python, and C++, developing responsive web and mobile applications while 
                continuously improving my problem-solving and development skills. 
                I enjoy transforming ideas into clean, efficient, and scalable systems that provide meaningful user experiences.
              </p>
              <p>
                Beyond development, I’m also exploring cybersecurity, data science, and cloud technologies to better understand how modern, 
                secure, and scalable systems are built. I value continuous learning, collaboration, 
                and hands-on experience, and I’m always eager to grow through real-world projects and challenges.
              </p>
            </div>

             <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                I’m driven to create innovative digital experiences that solve real problems 
                through modern development, creativity, and AI-driven innovation.
              </p>
            </div>
          </div>

                    {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/30">
                  <item.icon className="w-6 h-6 text-primary hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
