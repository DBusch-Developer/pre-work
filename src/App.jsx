import { useState } from "react";
import { days } from "./data/index.js";
import Header from "./components/Header";
import DayNav from "./components/DayNav";
import Footer from "./components/Footer";
import DayPage from "./pages/DayPage";

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const day = days[activeDay];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#e5e5e5",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      <Header activeDay={activeDay} />
      <DayNav activeDay={activeDay} setActiveDay={setActiveDay} />
      <DayPage
        day={day}
        activeDay={activeDay}
        totalDays={days.length}
        setActiveDay={setActiveDay}
      />
      <Footer />
    </div>
  );
}
