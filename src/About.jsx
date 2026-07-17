import React from "react";
import DeveloperImage from "./assets/DeveloperImage.jpg";
import { ImageIcon, Sparkles } from "lucide-react";


/* -------------------------------------------------------------
   DATA
   ------------------------------------------------------------- */
const SKILLS = [
  "React",
  "HTML & CSS",
  "Tailwind CSS",
  "Git",
  "Web Accessibility (A11y)",
  "REST APIs",
];

const FOCUS_POINTS = [
  "Exploring Three.js animations",
  "Optimizing frontend performance",
  "Contributing to open source",
];


function HeadlineCard() {
  return (
    <div className="about-card about-headline">
      <span className="about-badge">
        <span className="about-dot" />
        Looking for new opportunities!
      </span>
    <div className="about-headline2">
      <h2 className="about-title">
        Frontend <span>engineer</span> specializing in clean code and
        user-centric interfaces.
      </h2>
    
      <p className="about-copy">
        I'm passionate about translating complex requirements into
        pixel-perfect, production-ready interfaces. Working primarily with
        React, I focus on writing clean, maintainable code while
        keeping performance and accessibility at the center of every
        decision — not an afterthought.
      </p>

      <p className="about-copy">
        Beyond the code, I enjoy collaborating closely with designers,
        product managers, and backend engineers to turn ambiguous ideas into
        resilient, well-tested products that hold up in the real world.
      </p>
      </div>
    </div>
  );
}

function ImageCard() {
  return (
    <div className="about-card about-image">
           <img src={DeveloperImage} alt="Hope" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px",}} />
      {/* <div className="about-image-inner">
        <ImageIcon size={32} strokeWidth={1.5} />
        <span>Your photo goes here</span>
      </div> */}
    </div>
  );
}

function SkillsCard() {
  return (
    <div className="about-card about-skills">
      <span className="about-card-label">Skills &amp; Tech Stack</span>
      <div className="about-tags">
        {SKILLS.map((skill) => (
          <span key={skill} className="about-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function FocusCard() {
  return (
    <div className="about-card about-focus">
      <span className="about-card-label">Currently</span>
      <ul className="about-focus-list">
        {FOCUS_POINTS.map((point) => (
          <li key={point}>
            <Sparkles size={16} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <span className="about-eyebrow">About Me</span>
      <p className="about-heading">
        A quick look at how I work, what I'm skilled in, and what I'm
        currently focused on.
      </p>

      <div className="about-grid">
        <HeadlineCard />
        <ImageCard />
        <SkillsCard />
        <FocusCard />
      </div>
    </section>
  );
}
