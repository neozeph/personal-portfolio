const socialLinks = [
  { 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", 
    href: "https://github.com/neozeph", 
    label: "GitHub" 
  },
  { 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg", 
    href: "https://www.linkedin.com/in/josef-alanrey-soriente/", 
    label: "LinkedIn" 
  },
  { 
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg", 
    href: "https://www.facebook.com/alanjosef.soriente", 
    label: "Facebook" 
  },
];

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "#certifications", label: "Certifications" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight hover:text-primary transition-colors">
              <img src="/jafs.svg" alt="JAFS Logo" className="w-6 h-6 object-contain" />
              <span>JAFS<span className="text-primary">.</span></span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Josef Alanrey Soriente. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full glass hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 group"
              >
            {social.image ? (
              <img src={social.image} alt={social.label} className={`w-6 h-6 object-contain group-hover:scale-110 transition-transform ${social.label === 'GitHub' ? 'bg-white rounded-full' : ''}`} />
            ) : (
              <social.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
            )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};