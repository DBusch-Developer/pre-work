import AccordionItem from "./AccordionItem";

export default function Section({ section, accentColor }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div
        style={{
          padding: "0 4px 10px",
          borderBottom: "1px solid #1f1f1f",
          marginBottom: "4px",
        }}
      >
        <div
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.95rem",
            fontWeight: "bold",
            color: "#e5e5e5",
            marginBottom: "4px",
          }}
        >
          {section.heading}
        </div>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.72rem",
            color: "#525252",
            letterSpacing: "0.02em",
          }}
        >
          {section.description}
        </div>
      </div>

      {section.qa.map((item, i) => (
        <AccordionItem key={i} q={item.q} a={item.a} link={item.link} accentColor={accentColor} />
      ))}
    </div>
  );
}
