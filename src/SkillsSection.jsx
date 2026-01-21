import Tailwindicon from "./assets/tailwindcss.svg?react";
import Html5 from "./assets/html5.svg?react";
import Javascript from "./assets/javascript.svg?react";
import Laravel from "./assets/laravel.svg?react";
import ReactIcon from "./assets/react.svg?react";
import Figma from "./assets/figma.svg?react";
import { useEffect, useState, useRef } from "react";

  const ACTIVE_LIFT = "-translate-y-6"; // highlight
  const IDLE_LIFT = "translate-y-0";    // default


export default function SkillsSection() {
  const [ level,setLevel ] = useState(null);
  const [isActive , setisActive] = useState(false);
  const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setisActive(entry.isIntersecting);
        },
        {
          threshold: 0.4, // 40% visible feels right for sections
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isActive) return;

      const levels = ["Comfortable", "Applied", "Exploring"];
      let index = -1;

      const interval = setInterval(() => {
        index = (index + 1) % levels.length;
        setLevel(levels[index]);
      }, 2000);

      return () => clearInterval(interval);
    }, [isActive]);


  return (


    <section ref={sectionRef} className="relative min-h-screen mt-10 ml-10">
      
      <div className=" top-0 h-screen flex flex-col justify-around space-x-44">
        
        <div className="mix-blend-difference">
          <h2 className="text-5xl p-10">Skills</h2>

          <div className="flex space-x-4 pl-6 translate-y-14">
              
                <IconRow isActive={level === "Comfortable"}>
                  <Skill><Tailwindicon /></Skill>
                </IconRow>
                <IconRow isActive={level === "Comfortable"}>
                  <Skill><Html5 /></Skill>
                </IconRow>
              <IconRow isActive={level === "Applied"}><Skill><Javascript /></Skill></IconRow>
              <IconRow isActive={level === "Exploring"}><Skill><ReactIcon /></Skill></IconRow>
              <IconRow isActive={level === "Exploring"}><Skill><Laravel /></Skill></IconRow>
              <IconRow isActive={level === "Comfortable"}><Skill><Figma /></Skill></IconRow>
              

                


          </div>
        </div>
        <div className=" h-40 w-full mix-blend-difference">
          {level && (
            <span
              key={level} // IMPORTANT: retriggers animation
              className="text-4xl p-10 block overflow-hidden whitespace-nowrap typing"
            >
              {level}
            </span>
          )}

        </div>

        {/*<div className="h-30 w-30 rounded-full border-white/40 border-2 translate-y-52" />*/}
      
      </div>
    </section>
  );
}


function Skill({ children, className = "" }) {
  return (
    <div className="w-18 h-18 flex items-center justify-center">
      <div className={`w-12 h-12 text-white ${className}`}>
        {children}
      </div>
    </div>
  );
}

function IconRow({ isActive, children }) {
  return (
    <div
      className={`flex space-x-4 transition-transform duration-700 ease-out ${
        isActive ? ACTIVE_LIFT : IDLE_LIFT
      }`}
    >
      {children}
    </div>
  );
}
