import { useMemo } from "react";
function HeroBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => {
        const seed = (i * 137.5) % 100;
        return {
          id: i,
          left: `${(seed * 1.3) % 100}%`,
          top: `${(seed * 2.7) % 100}%`,
          size: 2 + (i % 3),
          duration: 6 + (i % 5),
          delay: (i % 6) * 0.8,
        };
      }),
    []
  );

  return (
    <div className="hero-glow" aria-hidden="true">
      <div className="glow-blob glow-blue" />
      <div className="glow-blob glow-purple" />
      <div className="glow-blob glow-cyan" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );


   
}
export default HeroBackground;