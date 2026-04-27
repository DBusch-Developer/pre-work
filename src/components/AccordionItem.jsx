import { useState } from "react";

export default function AccordionItem({ q, a, link, accentColor }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderLeft: `2px solid ${open ? accentColor : "#2a2a2a"}`,
        transition: "border-color 0.2s",
        marginBottom: "2px",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: open ? "rgba(255,255,255,0.03)" : "transparent",
          border: "none",
          padding: "14px 20px",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px",
          transition: "background 0.2s",
        }}
      >
        <span
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.82rem",
            color: "#d4d4d4",
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          <span style={{ color: accentColor, marginRight: "8px", opacity: 0.7 }}>›</span>
          {q}
        </span>
        <span
          style={{
            color: accentColor,
            fontSize: "1.1rem",
            flexShrink: 0,
            lineHeight: 1,
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.2s",
            marginTop: "2px",
          }}
        >
          +
        </span>
      </button>

      {open && (
        <div
          style={{
            padding: "0 20px 16px 40px",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.8rem",
            color: "#9ca3af",
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {a}<br />
          {link && (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "8px",
                color: accentColor,
                textDecoration: "none",
                borderBottom: `1px solid ${accentColor}`,
                opacity: 0.85,
              }}
            >
              {link.label}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
