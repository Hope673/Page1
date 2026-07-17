
function LaptopMockup() {
  return (
    <div className="laptop" aria-hidden="true">
      <div className="laptop-screen">
        <div className="laptop-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="laptop-content">
          <div className="laptop-bar short" />
          <div className="laptop-bar mid" />
          <div className="laptop-bar grid">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="laptop-base" />
    </div>
  );
}

export default LaptopMockup;