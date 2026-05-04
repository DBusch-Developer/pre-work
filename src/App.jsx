import { useState } from "react";
import { weeks } from "./data/index.js";
import Header from "./components/Header";
import DayNav from "./components/DayNav";
import Footer from "./components/Footer";
import DayPage from "./pages/DayPage";

export default function App() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeDayInWeek, setActiveDayInWeek] = useState(0);

  const week = weeks[activeWeek];
  const day = week.days[activeDayInWeek];

  function goToPrev() {
    if (activeDayInWeek > 0) {
      setActiveDayInWeek(activeDayInWeek - 1);
    } else if (activeWeek > 0) {
      const prevWeek = weeks[activeWeek - 1];
      setActiveWeek(activeWeek - 1);
      setActiveDayInWeek(prevWeek.days.length - 1);
    }
  }

  function goToNext() {
    if (activeDayInWeek < week.days.length - 1) {
      setActiveDayInWeek(activeDayInWeek + 1);
    } else if (activeWeek < weeks.length - 1) {
      setActiveWeek(activeWeek + 1);
      setActiveDayInWeek(0);
    }
  }

  const isFirst = activeWeek === 0 && activeDayInWeek === 0;
  const isLast =
    activeWeek === weeks.length - 1 &&
    activeDayInWeek === week.days.length - 1;

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

      <Header activeWeek={activeWeek} activeDayInWeek={activeDayInWeek} />
      <DayNav
        activeWeek={activeWeek}
        activeDayInWeek={activeDayInWeek}
        setActiveWeek={setActiveWeek}
        setActiveDayInWeek={setActiveDayInWeek}
      />
      <DayPage
        day={day}
        week={week}
        activeDayInWeek={activeDayInWeek}
        onPrev={goToPrev}
        onNext={goToNext}
        isFirst={isFirst}
        isLast={isLast}
      />
      <Footer />
    </div>
  );
}
