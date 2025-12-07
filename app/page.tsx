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
    <main className="min-h-screen text-white">
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
