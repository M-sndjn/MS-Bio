import ParallaxText from "./ParallaxText";
import { useEffect, useState } from "react";

const WORDS = [
  "Deliberate",
  "Consistent",
  "Simple",
  "Thoughtful",
];

export default function IntroSection() {
  const [word, setWord] = useState(WORDS[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % WORDS.length;
      setWord(WORDS[index]);
    }, 2200);

    return () => clearInterval(interval);
  }, []);


  return (

    <section className="relative min-h-screen flex ml-10 mt-20">

        <div className="mix-blend-difference text-5xl p-10 space-y-20 ">
          <div>
            <span>Hello!</span>
            <span className="text-4xl block">My Name Is Masaki</span>
          </div>

          <span className="text-3xl text-white/80 block mt-6 w-48">
            I design and build interfaces that feel{" "}
            <span key={word} className="block text-white overflow-hidden font-medium typing">
              {word}
            </span>
          </span>
        </div>
 
    </section>
  );
}
