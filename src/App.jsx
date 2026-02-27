import "./App.css";

import IntroSection from "./IntroSection";
import SkillsSection from "./SkillsSection";
import GridLayer from "./GridLayer";

export default function App() {
  return (
    <div className="relative w-screen min-h-[200dvh] font-kodemono bg-black text-white overflow-x-hidden">
      <GridLayer />

      <main className="relative">
        <IntroSection />
        <SkillsSection />
        
      </main>
    </div>
  );
}

