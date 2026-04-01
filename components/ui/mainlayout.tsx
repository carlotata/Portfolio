"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { HeroImage } from "@/components/ui/heroimage";
import { Button } from "@/components/ui/button";
import { Sparkles, GraduationCap, MapPin } from "lucide-react";

export default function Mainlayout() {
   const { scrollY } = useScroll();

   const y1 = useTransform(scrollY, [0, 500], [0, -150]);
   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

   return (
      <main className="relative flex items-center justify-center min-h-screen px-4 sm:px-10 overflow-hidden">

         <motion.h1
            style={{ y: y1, opacity }}
            className="absolute top-[15%] sm:top-[20%] left-1/2 -translate-x-1/2 text-[11vw] m:text-[8vw] font-black tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap text-black/3 dark:text-white/3 uppercase">
            JOHN CARL AVISO
         </motion.h1>

         <motion.h1
            style={{ y: y1 }}
            className="absolute top-[10%] sm:top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11vw] m:text-[8vw] font-black tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap text-black dark:text-white/8">
            JOHN CARL AVISO
         </motion.h1>

         <div className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none">
            <HeroImage />
         </div>

         <div className="relative z-20 w-full sm:w-auto sm:mr-auto max-w-sm mt-130 sm:mt-20 mb-8 sm:mb-0">
            <motion.div
               initial={{ x: -100, opacity: 0, rotate: -2 }}
               animate={{ x: 0, opacity: 1, rotate: 0 }}
               transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  delay: 0.2,
               }}
               className="bg-white/70 dark:bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 relative">

               <div className="absolute -top-5 -right-5 w-12 h-12 bg-[#3D3D3D] rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                  <Sparkles className="text-white w-6 h-6" />
               </div>

               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}>
                  <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 leading-[0.9] uppercase tracking-tighter">
                     Get to
                     <br />
                     <span className="text-black/40 italic">Know Me</span>
                  </h2>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4 mb-8">
                  <p className="text-[#333333] dark:text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                     A 3rd Year College Student from Cordova Public College.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                     <span className="flex items-center gap-1 text-[10px] font-bold bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        <GraduationCap size={12} /> Student
                     </span>
                     <span className="flex items-center gap-1 text-[10px] font-bold bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        <MapPin size={12} /> Cebu, PH
                     </span>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}>
                  <Button className="group relative overflow-hidden bg-[#1A1A1A] text-white px-8 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl w-full sm:w-auto">
                     <span className="relative z-10">Contact Me</span>
                     <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
               </motion.div>
            </motion.div>
         </div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-linear-to-b from-black to-transparent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] vertical-text">
            </span>
         </motion.div>
      </main>
   );
}
