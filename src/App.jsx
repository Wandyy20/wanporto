import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Container from "./components/Container.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import TransitionOverlay from "./components/TransitionOverlay.jsx";
import Section from "./components/Section.jsx";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);

  const NAVBAR_HEIGHT = 80;
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollTo = (ref) => {
    if (!ref?.current) return;
    setIsTransitioning(true);
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <div className="bg-slate-950">
      <AnimatePresence>{isTransitioning && <TransitionOverlay />}</AnimatePresence>

      <Navbar /> 

      <main className="pt-24">
        <Container>
          <Section id="home" ref={homeRef} className="min-h-[calc(100vh-80px)] flex items-center">
            <Home />
          </Section>
          
          <Section id="about" ref={aboutRef} className="min-h-[calc(100vh-80px)] flex items-center">
            <About />
          </Section>

          <Section id="experience" ref={expRef} className="min-h-[calc(100vh-80px)] flex items-center">
            <Experience />
          </Section>

          <Section id="projects" ref={projRef} className="min-h-[calc(100vh-80px)] flex items-center">
            <Projects />
          </Section>

          <Section id="contact" ref={contactRef} className="min-h-[calc(100vh-80px)] flex items-center">
            <Contact />
          </Section>
        </Container>
      </main>
    </div>
  );
}