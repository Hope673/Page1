import { ArrowUpRight } from "lucide-react";
function HeroContent({ SOCIALS }) {
  return (
    <div className="hero-content">
      <span className="hero-greeting">Hello, I'm</span>
      <h1 className="hero-name">Hope Adeyemi</h1>
      <p className="hero-subtitle">Frontend Developer</p>
      <p className="hero-description">
        I build fast, responsive, and visually stunning web applications
        using React and modern frontend technologies.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">
          View Projects
          <ArrowUpRight size={18} />
        </a>
        <a href="#contact" className="btn btn-ghost">
          Hire Me
        </a>
      </div>

      <div className="hero-socials">
        {SOCIALS.map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={label}
          >
            <Icon size={19} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeroContent;