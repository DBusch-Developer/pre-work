import { weeks } from "../data/index.js";

export default function DayNav({ activeWeek, activeDayInWeek, setActiveWeek, setActiveDayInWeek }) {
  const week = weeks[activeWeek];
  const activeColor = week.days[activeDayInWeek]?.color || "#f59e0b";

  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "780px",
        margin: "0 auto",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      {/* Week tabs */}
      <div
        style={{
          display: "flex",
          padding: "0 32px",
          gap: "0",
          borderBottom: "1px solid #141414",
        }}
      >
        {weeks.map((w, wi) => (
          <button
            key={wi}
            onClick={() => {
              setActiveWeek(wi);
              setActiveDayInWeek(0);
            }}
            style={{
              background: "none",
              border: "none",
              borderBottom: wi === activeWeek ? `2px solid ${w.days[0]?.color || "#f59e0b"}` : "2px solid transparent",
              padding: "12px 20px 10px",
              cursor: "pointer",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: wi === activeWeek ? "#d4d4d4" : "#3a3a3a",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            {w.label}
          </button>
        ))}
      </div>

      {/* Day tabs */}
      <nav
        style={{
          display: "flex",
          padding: "0 32px",
          overflowX: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: `${activeColor} transparent`,
        }}
        className="day-nav"
      >
        {week.days.map((d, di) => (
          <button
            key={di}
            onClick={() => setActiveDayInWeek(di)}
            style={{
              background: "none",
              border: "none",
              borderBottom: di === activeDayInWeek ? `2px solid ${d.color}` : "2px solid transparent",
              padding: "14px 18px 12px",
              cursor: "pointer",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.05em",
              color: di === activeDayInWeek ? d.color : "#4b5563",
              whiteSpace: "nowrap",
              transition: "color 0.2s, border-color 0.2s",
              flexShrink: 0,
            }}
          >
            {d.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
