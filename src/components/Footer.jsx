export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid #141414",
        padding: "24px 32px",
        maxWidth: "780px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.65rem",
          color: "#2d2d2d",
          letterSpacing: "0.1em",
        }}
      >
        DIANA BUSCH · NEXT CHAPTER · 2026
      </span>
      <a
        href="https://github.com/diana-busch"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.65rem",
          color: "#3a3a3a",
          textDecoration: "none",
          letterSpacing: "0.1em",
          transition: "color 0.2s",
        }}
      >
        github ↗
      </a>
    </footer>
  );
}
