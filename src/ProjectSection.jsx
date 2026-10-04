import ParallaxText from "./ParallaxText";
import { useEffect, useState } from "react";
const PROJECTS = [
  {
    id: "01",
    name: "Quest_Forge",
    stack: "react, tailwind, Vite",
    status: "live",
    href: "https://questforge-mu.vercel.app/",
  },

];

export default function ProjectSection() {
  return (
    <section className="relative min-h-dvh ml-10 mt-20">
      <div className="mix-blend-difference px-2 sm:p-10 py-10 space-y-16">
        <div>
          <h2 className="text-3xl sm:text-4xl">Projects</h2>
          <span className="block text-md sm:text-lg text-white/80 mt-3 w-[54%]">
            Things I've built.
          </span>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {PROJECTS.map((p) => (
            <a key={p.id} href={p.href} className="group block text-sm sm:text-xl">
              <div className="text-white">
                <span className="opacity-50">&gt; </span>
                {p.id}_{p.name}
                <span className="cursor opacity-0 group-hover:opacity-100">_</span>
              </div>

              <div className="pl-4 sm:pl-6 mt-2 space-y-1 text-white/70">
                <div>
                  <span className="inline-block w-20 sm:w-28 opacity-50">stack</span>
                  {p.stack}
                </div>
                <div>
                  <span className="inline-block w-20 sm:w-28 opacity-50">status</span>
                  {p.status} 
                </div>
                <div className="text-white transition-transform duration-300 group-hover:translate-x-2">
                  [ view ↗ ]
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}