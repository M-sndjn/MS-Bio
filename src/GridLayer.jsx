import { useEffect, useState } from "react";

// keeps n between a and b
const clamp = (n, a = 0, b = 1) => Math.min(b, Math.max(a, n));
// value between a and b at progress t (0 → a, 1 → b)
const lerp = (a, b, t) => a + (b - a) * t;

export default function GridLayer() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const update = () => setScroll(window.scrollY);

    update(); // set the initial value on mount
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update); // important for mobile URL bar

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // ---------- third block (the one that enlarges) ----------
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const isDesktop = vw >= 640;

  const blockTop = 3 * vh - scroll * 1.5;   // same rising math as --base-y: 300dvh
  const t = clamp((vh - blockTop) / vh);    // progress: 0 when it enters, 1 at the top

  // start values (match the other blocks / column 1)
  const startW = isDesktop ? 48 : 82;       // % of screen width
  const startH = isDesktop ? 70 : 50;       // vh
  const startLeft = 0.04 * vw;              // px, the 4% left margin

  const block3 = {
    width: `${lerp(startW, 100, t)}%`,
    height: `${lerp(startH, 100, t)}vh`,
    left: `${lerp(startLeft, 0, t)}px`,
    top: `${Math.max(0, blockTop) * (1 - t)}px`,
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[100dvh] pointer-events-none">
      <div className="absolute inset-0 flex">

        {/* LEFT MARGIN */}
        <div className="w-[4%] border-l border-white/0" />

        {/* COLUMN 1 */}
        <div className="relative w-[82%] sm:w-[48%] border-l border-red-500/0 overflow-hidden">
          <div
            className="absolute w-full sm:min-h-[70vh] sm:[--base-y:28dvh] [--base-y:28dvh] h-[50dvh] bg-white mix-blend-difference"
            style={{
              transform: `translateY(calc(var(--base-y) - ${scroll * 1.5}px))`,
            }}
          />
          <div
            className="absolute w-full sm:min-h-[70vh] sm:[--base-y:178dvh] [--base-y:180dvh] h-[50vh] bg-white mix-blend-difference"
            style={{
              transform: `translateY(calc(var(--base-y) - ${scroll * 1.5}px))`,
            }}
          />
          <div
            className="absolute w-full sm:min-h-[70vh] sm:[--base-y:368dvh] [--base-y:357dvh] h-[50vh] bg-white mix-blend-difference z-10"
            style={{
              transform: `translateY(calc(var(--base-y) - ${scroll * 1.5}px))`,
            }}
          />
        </div>

        {/* GAP */}
        <div className="w-[9%] border-l border-green-500/0" />

        {/* COLUMN 2 */}
        <div className="relative w-[18%] hidden sm:block border-l sm:border-amber-400/0 border-white/0 overflow-hidden">
          <div
            className="absolute w-full h-[20vh] sm:min-h-[35vh] bg-white top-[45vh]"
            style={{ transform: `translateY(${scroll * 0.7}px)` }}
          />
          <div
            className="absolute w-full h-[20vh] sm:min-h-[35vh] bg-white -top-[69vh] "
            style={{ transform: `translateY(${scroll * 0.7}px)` }}
          />
        </div>

        {/* FILL */}
        <div className="flex-1 border-l border-white/0" />
      </div>

      {/* THIRD BLOCK: root of the fixed wrapper, so 100% means the full screen */}
      <div
        className="absolute bg-gray-100 z-0" // switch to bg-white once you're happy
        style={block3}
      />
    </div>
  );
}