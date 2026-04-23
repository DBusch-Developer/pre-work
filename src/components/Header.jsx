import { days } from "../data/days";

export default function Header({ activeDay }) {
  return (
    <header
      style={{
        position: "relative",
        zIndex: 1,
        padding: "52px 32px 36px",
        maxWidth: "780px",
        margin: "0 auto",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.7rem",
          color: "#525252",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        Next Chapter Initiative — Pre-Work Documentation
      </div>

      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: "normal",
          lineHeight: 1.15,
          marginBottom: "14px",
          letterSpacing: "-0.02em",
          color: "#f5f5f5",
        }}
      >
        Diana Busch
        <br />
        <span style={{ color: "#525252", fontStyle: "italic" }}>learning out loud.</span>
      </h1>

      <p
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.78rem",
          color: "#6b7280",
          lineHeight: 1.7,
          maxWidth: "520px",
        }}
      >
        Five days of pre-work before Day 1 of the Next Chapter AI-Augmented Builder program.
        Every question I asked AI, every answer it gave, every place it broke — documented here.
      </p>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: "8px", marginTop: "28px" }}>
        {days.map((d, i) => (
          <div
            key={i}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: i === activeDay ? d.color : "#2a2a2a",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </header>
  );
}
