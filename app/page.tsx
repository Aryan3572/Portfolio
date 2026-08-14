import Navbar from "@/components/navbar/navbar";
import HeroWrapper from "@/components/hero/HeroWrapper";
import About from "@/components/about/About";

import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Achievements from "@/components/achievements/Achievements";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroWrapper />

      <About />

      <Experience />

      <Projects />

      <Skills />

      <Achievements />

      <Contact />
    </>
  );
}