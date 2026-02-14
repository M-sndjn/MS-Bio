import Tailwindicon from "./assets/tailwindcss.svg?react";
import Html5 from "./assets/html5.svg?react";
import Javascript from "./assets/javascript.svg?react";
import Laravel from "./assets/laravel.svg?react";
import ReactIcon from "./assets/react.svg?react";
import Figma from "./assets/figma.svg?react";
import { useEffect, useState, useRef } from "react";
import Triangle from "./assets/Triangle.png";

  const ACTIVE_LIFT = "-translate-y-6"; // highlight
  const IDLE_LIFT = "translate-y-0";    // default


export default function SkillsSection() {
  const [ level,setLevel ] = useState(null);
  const [isActive , setisActive] = useState(false);
  const sectionRef = useRef(null);
  {/* 
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  */}

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

        const levels = ["Comfortable", "Applied", "Exploring", "Outro"];
        let index = levels.indexOf(level);

        const delay = level === "Outro" ? 5000 : 2000;

        const timeout = setTimeout(() => {
          const nextIndex = (index + 1) % levels.length;
          setLevel(levels[nextIndex]);
        }, delay);

        return () => clearTimeout(timeout);
      }, [isActive, level]);


  const emailRef = useRef(null);
  const delayTimeoutRef = useRef(null);
  const [isEmailActive, setIsEmailActive] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // delay activation
          delayTimeoutRef.current = setTimeout(() => {
            setIsEmailActive(true);
          }, 8000);
        } else {
          // reset if it leaves view
          clearTimeout(delayTimeoutRef.current);
          setIsEmailActive(false);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (emailRef.current) {
      observer.observe(emailRef.current);
    }

    return () => {
      clearTimeout(delayTimeoutRef.current);
      observer.disconnect();
    };
  }, []);




  return (


    <section ref={sectionRef} className="relative min-h-screen mt-10 ml-10">
      {/*
      <div style = {{transform: `translateY(${-scroll * 0.34}px)`}}><img src={Triangle} alt="" className="absolute float-slow w-8 h-8 right-[10vh] top-[10vh]"/></div>
      <div style = {{transform: `translateY(${-scroll * 0.26}px)`}}><img src={Triangle} alt="" className="absolute float-slow w-8 h-8 right-[22vh] top-[48vh]"/></div>
      <div style = {{transform: `translateY(${-scroll * 0.39}px)`}}><img src={Triangle} alt="" className="absolute float-slow w-8 h-8 right-[7vh] top-[24vh]"/></div>
      <div style = {{transform: `translateY(${-scroll * 0.24}px)`}}><img src={Triangle} alt="" className="absolute float-slow w-8 h-8 right-[37vh] top-[38vh]"/></div>
      <div style = {{transform: `translateY(${-scroll * 0.36}px)`}}><img src={Triangle} alt="" className="absolute float-slow w-8 h-8 right-[4vh] top-[28vh]"/></div>
       */}
      <div className=" top-0 h-screen flex flex-col justify-around space-x-44">
        
        <div className="mix-blend-difference ">
          <h2 className="text-3xl sm:text-4xl sm:px-10 py-5 px-5">Skills</h2>
          <span className="text-white sm:px-10 px-5 block text-md sm:text-lg w-3/5">What I actively use, what I’ve applied in projects, and what I’m currently exploring.</span>

          <div className="flex space-x-2 sm:space-x-4 sm:pl-6 pl-3 translate-y-15 sm:translate-y-20">
              
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
          {level && level !== "Outro" && (
            <span
              key={level} // IMPORTANT: retriggers animation
              className="text-2xl sm:text-3xl sm:p-10 px-5 py-10 block overflow-hidden whitespace-nowrap typing"
            >
              {level}
            </span>
          )}
          {level === "Outro" && (
            <div className="sm:p-10 px-5 py-10 space-y-2">
              <span className="text-2xl sm:text-3xl block typing overflow-hidden whitespace-nowrap ">
                Let’s build something.
              </span>
            </div> 

          )}
            <div ref={emailRef}>
              {isEmailActive && (
                <span className="text-md sm:text-sm sm:px-10 px-5 opacity-70 block overflow-hidden whitespace-nowrap typing-slow">
                  sandajan.masaki1919@gmail.com
                </span>
              )}
            </div>
        </div>

        {/*<div className="h-30 w-30 rounded-full border-white/40 border-2 translate-y-52" />*/}
      
      </div>
    </section>
  );
}


function Skill({ children, className = "" }) {
  return (
    <div className="w-10 h-10 sm:w-18 sm:h-18 flex items-center justify-center">
      <div className={`w-8 h-8 sm:w-12 sm:h-12 text-white ${className}`}>
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
