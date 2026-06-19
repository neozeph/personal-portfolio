import { IntroAnimation } from "@/components/IntroAnimation";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Services } from "@/sections/Services";
import { Footer } from "./layout/Footer";

function App() {

  return <div className = "min-h-screen overflow-x-hidden">
    <IntroAnimation />
    <Navbar />
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />

    </main>
    <Footer />

  </div>
}

export default App
