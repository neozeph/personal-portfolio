import * as Lucide from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    title: "SQL Associate",
    issuer: "DataCamp",
    description:
      "Mastered the basics of data analysis using SQL and Python, including core data structures, algorithms, and database management.",
    image: "/certifications/cert-1.png",
    tags: ["SQL", "DataCamp"],
    link: "#",
  },
  {
    title: "Data Analyst Associate",
    issuer: "DataCamp",
    description:
      "Demonstrated practical data analysis skills, including data preparation, exploratory analysis, data visualization, and interpreting results to support data-driven decisions.",
    image: "/certifications/cert-2.png",
    tags: ["Data Analysis", "SQL", "Data Visualization", "DataCamp"],
    link: "#",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    description:
      "Gained foundational knowledge of cybersecurity, exploring the different types of malware and attacks, and the measures used to mitigate cyber threats.",
    image: "/certifications/cert-3.png",
    tags: ["Cybersecurity"],
    link: "#",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    description:
      "Gained foundational knowledge of cybersecurity, exploring the different types of malware and attacks, and the measures used to mitigate cyber threats.",
    image: "/certifications/cert-4.png",
    tags: ["Networking"],
    link: "#",
  },
  {
    title: "Development and Basic Concepts of Cloud Computing",
    issuer: "Huawei",
    description:
      "Acquired an understanding of cloud computing principles, underlying architecture, service models, and standard deployment practices.",
    image: "/certifications/cert-5.png",
    tags: ["Cloud Computing", "Huawei"],
    link: "#",
  },
  {
    title: "Python Programming Fundamentals",
    issuer: "DataCamp",
    description:
      "Mastered the basics of data analysis using SQL and Python, including core data structures, algorithms, and database management.",
    image: "/certifications/cert-7.png",
    tags: ["Python", "DataCamp"],
    link: "#",
  },
  {
    title: "GitHub Foundations",
    issuer: "DataCamp",
    description:
      "Learned essential version control concepts, repository management with Git/GitHub.",
    image: "/certifications/cert-6.png",
    tags: ["Git", "GitHub"],
    link: "#",
  },

  {
    title: "AI Fundamentals",
    issuer: "DataCamp",
    description:
      "Learned essential version control concepts, repository management with Git/GitHub.",
    image: "/certifications/cert-8.png",
    tags: ["AI", "Machine Learning"],
    link: "#",
  },
];

export const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="py-32 relative overflow-hidden ">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            CERTIFICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-gradient leading-normal pb-2">
            Validating my
            <span className="font-serif italic font-normal text-white">
              {" "}
              skills and expertise.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of my professional certifications, continuous learning,
            and technical achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-surface/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    aria-label={`View details for ${cert.title} certification`}
                    onClick={() => setSelectedImage(cert.image)}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                  >
                    <Lucide.Award className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors pr-4">
                      {cert.title}
                    </h3>
                    <div className="text-sm font-medium text-primary/80 mt-1">
                      {cert.issuer}
                    </div>
                  </div>
                  <Lucide.ArrowUpRight className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full flex justify-center animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 md:-right-4 p-2 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform z-10 shadow-lg"
            >
              <Lucide.X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Certification Detail"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl glass p-2 shadow-2xl shadow-primary/20"
            />
          </div>
        </div>
      )}
    </section>
  );
};
