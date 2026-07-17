import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";

const PROJECTS = [
  {
    name: "Agure Bistro",
    description:
      "An elegant fine-dining brand site with a full reservations flow, menu highlights, and a warm, editorial visual style.",
    image: image1,
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    name: "Medcare",
    description:
      "A clean healthcare booking site with doctor listings, service categories, and an appointment scheduling flow.",
    image: image2,
    tags: ["React", "Accessibility"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    name: "Flavor",
    description:
      "A moody, dark-themed restaurant site with a bold hero, stats bar, and a smooth table reservation flow.",
    image: image3,
    tags: ["React", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
  },
  
  
];

function ProjectCard({ project }) {
  const { name, description, image, tags, liveUrl, codeUrl, featured } = project;

  return (
    <div className={`project-card${featured ? " featured" : ""}`}>
      <div className="project-image">
        <img src={image} alt={`${name} website preview`} loading="lazy" />
      </div>

      <div className="project-body">
        <h3 className="project-name">{name}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* <div className="project-links">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link primary"
          >
            Live Demo <ExternalLink size={15} />
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link ghost"
          >
            Code <FaGithub size={15} />
          </a>
        </div> */}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   PROJECTS — top level export
   ------------------------------------------------------------- */
export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <span className="projects-eyebrow">Selected Work</span>
        <h2 className="projects-title">Projects I've Built</h2>
        <p className="projects-subtitle">
          A mix of client-style concepts and personal builds — spanning
          hospitality, healthcare, real estate, and SaaS products.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
