import React, { useMemo } from "react";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight, } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";
import HeroBackground from "./HeroBackground";
import LaptopMockup from "./LaptopMockup";
import HeroContent from "./HeroContent";
import TechOrbit from "./TechOrbit";

const TECH_STACK = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
];

const SOCIALS = [
  { label: "GitHub", Icon: FaGithub, href: "https://github.com/Hope673" },
  { label: "LinkedIn", Icon: FaLinkedin, href: "https://linkedin.com/in/yourhandle" },
  { label: "Twitter", Icon: FaTwitter, href: "https://twitter.com" },
  { label: "Email", Icon: FaEnvelope, href: "mailto:you@example.com" },
];


 


export default function Hero() {
  return (
    <section className="hero" id="home">
      <HeroBackground />
      <div className="hero-grid">
      <HeroContent SOCIALS={SOCIALS} />
        <TechOrbit TECH_STACK={TECH_STACK} />
      </div>
    </section>
  );
}
