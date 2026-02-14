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
        <div className="relative w-[48%] border-l border-red-500/90 overflow-hidden">
          <div
            className="absolute w-full sm:min-h-[70vh] sm:[--base-y:28vh] [--base-y:28vh] h-[50vh]  bg-white  mix-blend-difference"
            style={{
              transform: `translateY(calc(var(--base-y) - ${scroll * 1.5}px))`,
            }}
          />
          <div
            className="absolute w-full sm:min-h-[70vh] sm:[--base-y:178vh] [--base-y:180vh] h-[50vh] bg-white  mix-blend-difference"
            style={{
              transform: `translateY(calc(var(--base-y) - ${scroll * 1.5}px))`,
            }}
          />

        </div>
        

        {/* GAP */}
        <div className="w-[9%] border-l border-green-500/90" />

        {/* COLUMN 2 */}
        <div className="relative w-[18%] border-l sm:border-amber-400 border-white/30 overflow-hidden">
          <div
            className="absolute w-full h-[20vh] sm:min-h-[35vh] bg-black sm:bg-white top-[45vh]"
            style={{
              transform: `translateY(${scroll * 0.7}px)`,
            }}
          />
                    <div
            className="absolute w-full h-[20vh] sm:min-h-[35vh] bg-black sm:bg-white -top-[69vh]"
            style={{
              transform: `translateY(${scroll * 0.7}px)`,
            }}
          />
        </div>

      
        

        {/* FILL */}
        <div className="flex-1 border-l border-white/60" />
      </div>
    </div>
  );
}
