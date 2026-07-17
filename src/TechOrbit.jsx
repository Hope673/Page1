import LaptopMockup from "./LaptopMockup";
function TechOrbit({TECH_STACK}) {
  const count = TECH_STACK.length;

  return (
    <div className="hero-visual">
      <div className="orbit-container">
        <div className="glass-sphere" />

        <LaptopMockup />

        <div className="orbit-ring">
          {TECH_STACK.map(({ name, Icon, color }, i) => {
            const angle = (360 / count) * i;
            return (
              <div
                key={name}
                className="orbit-item"
                style={{ "--angle": `${angle}deg` }}
              >
                <div className="icon-counter">
                  <div
                    className="icon-float"
                    style={{
                      animationDelay: `${(i % count) * 0.35}s`,
                      animationDuration: `${3 + (i % 3) * 0.6}s`,
                    }}
                  >
                    <div className="tech-card">
                      <Icon color={color} />
                      <span className="tech-tooltip">{name}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechOrbit;