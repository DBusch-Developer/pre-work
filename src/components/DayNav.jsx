import { days } from "../data/days";

export default function DayNav({ activeDay, setActiveDay }) {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "780px",
        margin: "0 auto",
        padding: "0 32px",
        borderBottom: "1px solid #1a1a1a",
        display: "flex",
        overflowX: "auto",
      }}
    >
      {days.map((d, i) => (
        <button
          key={i}
          onClick={() => setActiveDay(i)}
          style={{
            background: "none",
            border: "none",
            borderBottom: i === activeDay ? `2px solid ${d.color}` : "2px solid transparent",
            padding: "16px 20px 14px",
            cursor: "pointer",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.05em",
            color: i === activeDay ? d.color : "#4b5563",
            whiteSpace: "nowrap",
            transition: "color 0.2s, border-color 0.2s",
            flexShrink: 0,
          }}
        >
          DAY {d.number}
        </button>
      ))}
    </nav>
  );
}
