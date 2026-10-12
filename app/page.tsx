import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Achievements from "@/components/achievements/Achievements";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#F5F4F3]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}