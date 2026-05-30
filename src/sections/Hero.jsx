import { useState, useRef, useMemo } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Globe,
  GitBranch,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: Globe }, // Kept as Lucide to avoid dark-theme invisibility
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Vercel", icon: Globe },
  { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub Actions", icon: GitBranch },
  { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Dart", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Javascript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
];

const halfSkills = Math.ceil(skills.length / 2);
const skillsRow1 = skills.slice(0, halfSkills);
const skillsRow2 = skills.slice(halfSkills);

const q1 = Math.ceil(skills.length / 4);
const q2 = Math.ceil(skills.length / 2);
const q3 = Math.ceil((skills.length * 3) / 4);

const mobileRow1 = skills.slice(0, q1);
const mobileRow2 = skills.slice(q1, q2);
const mobileRow3 = skills.slice(q2, q3);
const mobileRow4 = skills.slice(q3);

const SkillRow = ({ skillsList, reverse, duration }) => (
  <div
    className="flex animate-marquee items-center gap-4 md:gap-6"
    style={{
      animationDirection: reverse ? "reverse" : "normal",
      animationDuration: duration,
    }}
  >
    {[...skillsList, ...skillsList, ...skillsList, ...skillsList].map((skill, idx) => (
      <div
        key={`${skill.name}-${idx}`}
        className="flex-shrink-0 glass px-4 py-2 md:px-6 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 hover:glow-border hover:border-primary/50 transition-all duration-300 group"
      >
        {skill.image ? (
          <img
            src={skill.image}
            alt={skill.name}
            className="w-4 h-4 md:w-5 md:h-5 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <skill.icon className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300" />
        )}
        <span className="text-sm md:text-lg font-semibold text-muted-foreground/80 group-hover:text-primary transition-colors">
          {skill.name}
        </span>
      </div>
    ))}
  </div>
);

export const Hero = () => {

  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const imageRef = useRef(null);

  // Memoize the background dots so they don't randomly teleport when the component re-renders!
  const dots = useMemo(() => [...Array(30)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
    animationDelay: `${Math.random() * 5}s`,
  })), []);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    const rotateX = (y - 0.5) * 20;
    const rotateY = (0.5 - x) * 20;
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`);

    const glareX = x * 100;
    const glareY = y * 100;
    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
    setGlareStyle({ opacity: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/80"></div>
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: dot.animation,
              animationDelay: dot.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text Content */}
          <div className="space-y-8 ">
            <div className="animate-fade-in ">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary hover:bg-blue/60 hover:text-light-blue">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse " />
                Aspiring Web Developer | Data Science & CyberSec Enthusiast
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-200">
                Creating <span className="text-gradient glow-text">systems</span>
                <br />
                with clean and 
                <br />
                <span className="font-serif italic font-normal text-white">
                  thoughtful design.
                </span>
              </h1>

              <p className="text-md md:text-lg lg:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                Hello, I’m <span className="text-light-blue/90 text-bold">Josef Alanrey Soriente</span> — a Computer Engineer passionate about building practical and user-centered software solutions with React, Flutter, and Python, 
                while continuously exploring cybersecurity, cloud, and software development.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <Button size="lg" onClick={() => (window.location.href = "#contact")}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

            <a href="/Josef_Alanrey_CV.pdf" download="Josef_Alanrey_CV.pdf">
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { 
                  name: "GitHub",
                  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                  href: "https://github.com/neozeph" 
                },
                {
                  name: "LinkedIn",
                  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
                  href: "https://www.linkedin.com/in/josef-alanrey-soriente/",
                },
                {
                  name: "Facebook",
                  image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg",
                  href: "https://www.facebook.com/alanjosef.soriente",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 group"
                >
                  {social.image ? (
                    <img src={social.image} alt={social.name} className={`w-6 h-6 object-contain group-hover:scale-110 transition-transform ${social.name === 'GitHub' ? 'bg-white rounded-full' : ''}`} />
                  ) : (
                    <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div 
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transform: transformStyle }}
                className="relative rounded-3xl p-[3px] bg-gradient-to-br from-primary via-light-blue to-blue group transition-all duration-200 ease-out shadow-2xl shadow-primary/20 hover:shadow-[0_0_40px_rgba(32,178,166,0.4)] cursor-pointer will-change-transform"
              >
                <div className="relative glass rounded-[21px] p-3 w-full h-full">
                <img
                  src="/profile-photo.png"
                  alt="Josef Alanrey"
                  className="w-full aspect-[4/5] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Glare Overlay */}
                <div 
                  className="absolute inset-0 rounded-[21px] pointer-events-none transition-opacity duration-300"
                  style={glareStyle}
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-6 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      AVAILABLE FOR WORK
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-8 -left-6 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-lg font-bold text-gradient">
                    GRADWAITING
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-xl text-gradient text-bold mb-6 text-center uppercase">Technologies</p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
            />
            
            {/* Desktop View: 2 Rows */}
            <div className="hidden md:flex flex-col gap-6 py-4">
              <SkillRow skillsList={skillsRow1} duration="15s" />
              <SkillRow skillsList={skillsRow2} reverse duration="15s" />
            </div>

            {/* Mobile View: 4 Rows */}
            <div className="flex md:hidden flex-col gap-4 py-4">
              <SkillRow skillsList={mobileRow1} duration="10s" />
              <SkillRow skillsList={mobileRow2} reverse duration="10s" />
              <SkillRow skillsList={mobileRow3} duration="10s" />
              <SkillRow skillsList={mobileRow4} reverse duration="10s" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
