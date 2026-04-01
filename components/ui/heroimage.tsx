"use client";

import { useState, useEffect } from "react";

export function HeroImage() {
   const [scrollOpacity, setScrollOpacity] = useState(0);
   const [isToggled, setIsToggled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {

         const threshold = 100;
         const currentScroll = window.scrollY;
         const opacity = Math.min(currentScroll / threshold, 1);
         setScrollOpacity(opacity);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const showReal = isToggled || scrollOpacity > 0.5;

   return (
      <div
         className="relative h-[99%] sm:h-[80%] lg:h-[80%] pointer-events-auto group cursor-pointer"
         onClick={() => setIsToggled(!isToggled)}>

         <img
            src="/3d.png"
            alt="Mockup"
            style={{ opacity: isToggled ? 0 : 1 - scrollOpacity }}
            className="h-full object-contain drop-shadow-2xl transition-opacity duration-300 ease-out 
                   group-hover:opacity-0"
         />

         <img
            src="/profile.png"
            alt="Real Me"
            style={{ opacity: isToggled ? 1 : scrollOpacity }}
            className="absolute inset-0 h-full object-contain drop-shadow-2xl transition-opacity duration-300 ease-out 
                   opacity-0 group-hover:opacity-100"
         />

         <div
            className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-bold transition-opacity duration-500 sm:hidden ${scrollOpacity > 0.1 ? "opacity-0" : "opacity-40"}`}>
            Scroll or Tap
         </div>
      </div>
   );
}
