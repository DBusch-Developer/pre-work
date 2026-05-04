import Section from "../components/Section";

export default function DayPage({ day, week, activeDayInWeek, onPrev, onNext, isFirst, isLast }) {
  return (
    <main
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "780px",
        margin: "0 auto",
        padding: "40px 32px 80px",
      }}
    >
      {/* Day Header */}
      <div style={{ marginBottom: "40px" }}>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.65rem",
            color: day.color,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "8px",
            opacity: 0.8,
          }}
        >
          {week.label} — Day {activeDayInWeek + 1}
        </div>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: "normal",
            letterSpacing: "-0.02em",
            marginBottom: "6px",
            color: "#f0f0f0",
          }}
        >
          {day.title}
        </h2>
        <p
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.78rem",
            color: "#525252",
            fontStyle: "italic",
          }}
        >
          {day.subtitle}
        </p>
      </div>

      {/* Sections */}
      {day.sections.map((section, i) => (
        <Section key={i} section={section} accentColor={day.color} />
      ))}

      {/* Prev / Next */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "48px",
          paddingTop: "24px",
          borderTop: "1px solid #1a1a1a",
        }}
      >
        <button
          onClick={onPrev}
          disabled={isFirst}
          style={{
            background: "none",
            border: "1px solid #1f1f1f",
            padding: "10px 20px",
            cursor: isFirst ? "not-allowed" : "pointer",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.72rem",
            color: isFirst ? "#2a2a2a" : "#6b7280",
            letterSpacing: "0.05em",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          ← prev day
        </button>
        <button
          onClick={onNext}
          disabled={isLast}
          style={{
            background: "none",
            border: `1px solid ${isLast ? "#1f1f1f" : day.color}`,
            padding: "10px 20px",
            cursor: isLast ? "not-allowed" : "pointer",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.72rem",
            color: isLast ? "#2a2a2a" : day.color,
            letterSpacing: "0.05em",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          next day →
        </button>
      </div>
    </main>
  );
}
