import Image from "next/image";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Hero from "./componenets/Hero";
import Projects from "./componenets/Projects";
import Skills from "./componenets/Skills";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";

export default function Home() {
 return (
    <main className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
