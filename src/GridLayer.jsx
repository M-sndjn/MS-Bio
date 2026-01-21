import { useEffect, useState } from "react";

export default function GridLayer() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen  pointer-events-none">
      <div className="absolute inset-0 flex">

        {/* LEFT MARGIN */}
        <div className="w-[4%] border-l border-white/0" />

        {/* COLUMN 1 */}
        <div className="relative w-[42%] border-l border-white/0 overflow-hidden">
          <div
            className="absolute w-full h-[70vh] bg-white top-[28vh] mix-blend-difference"
            style={{
              transform: `translateY(${-scroll * 1.5}px)`,
            }}
          />
                    <div
            className="absolute w-full h-[70vh] bg-white top-[180vh] mix-blend-difference"
            style={{
              transform: `translateY(${-scroll * 1.5}px)`,
            }}
          />

        </div>
        

        {/* GAP */}
        <div className="w-[9%] border-l border-white/0" />

        {/* COLUMN 2 */}
        <div className="relative w-[18%] border-l border-white/0 overflow-hidden">
          <div
            className="absolute w-full h-[35vh] bg-white top-[45vh]"
            style={{
              transform: `translateY(${scroll * 0.7}px)`,
            }}
          />
                    <div
            className="absolute w-full h-[35vh] bg-white -top-[65vh]"
            style={{
              transform: `translateY(${scroll * 0.7}px)`,
            }}
          />
        </div>

        {/* EMPTY COLUMN */}
        <div className="w-[8%] border-l border-white/0" />

        {/* FILL */}
        <div className="flex-1 border-l border-white/0" />
      </div>
    </div>
  );
}
