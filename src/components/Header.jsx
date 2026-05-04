import { weeks } from "../data/index.js";

export default function Header({ activeWeek, activeDayInWeek }) {
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
        <span style={{ color: "#525252", fontStyle: "italic" }}>
          learning out loud.
        </span>
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
        A running record of learning to build with AI inside the Next Chapter
        program. Every prompt, every answer, every moment it surprised me —
        documented here.
      </p>

      {/* Progress dots — grouped by week */}
      <div style={{ display: "flex", gap: "16px", marginTop: "28px", alignItems: "center" }}>
        {weeks.map((w, wi) => (
          <div key={wi} style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {w.days.map((d, di) => (
              <div
                key={di}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background:
                    wi === activeWeek && di === activeDayInWeek
                      ? d.color
                      : wi < activeWeek || (wi === activeWeek && di < activeDayInWeek)
                      ? "#3a3a3a"
                      : "#1e1e1e",
                  transition: "background 0.3s",
                }}
              />
            ))}
            {wi < weeks.length - 1 && (
              <div style={{ width: "12px", height: "1px", background: "#1e1e1e", marginLeft: "2px" }} />
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
