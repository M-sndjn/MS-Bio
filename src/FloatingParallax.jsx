import { useEffect, useState } from "react";

export default function FloatingParallax({ 
  src, 
  xRange = [0, 0], 
  yRange = [0, 0], 
  size = 40 
}) {

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll; // 0 → 1

      const x = xRange[0] + (xRange[1] - xRange[0]) * progress;
      const y = yRange[0] + (yRange[1] - yRange[0]) * progress;

      setOffset({ x, y });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount so animation starts in correct spot

    return () => window.removeEventListener("scroll", handleScroll);
  }, [xRange, yRange]);

  return (
    <img
      src={src}
      alt=""
      style={{
        width: `${size}px`,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
      className="pointer-events-none"
    />
  );
}
