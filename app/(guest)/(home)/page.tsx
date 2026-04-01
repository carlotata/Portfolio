import { HeroImage } from "@/components/ui/heroimage";
import { Button } from "@/components/ui/button";

export default function HomePage() {
   return (
      <div className="min-h-screen font-sans overflow-hidden relative">
         <main className="relative flex items-center justify-center min-h-screen px-4 sm:px-10">
            <h1 className="absolute top-[10%] sm:top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11vw] m:text-[8vw] font-black tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap">
               JOHN CARL AVISO
            </h1>

            <div className="absolute inset-0 flex justify-center items-end z-10 pointer-events-none">
               <HeroImage/>
            </div>

            <div className="relative z-20 w-full sm:w-auto sm:mr-auto max-w-sm mt-130 sm:mt-20 mb-8 sm:mb-0">
               <div className="bg-[#E5E5E5]/60 backdrop-blur-sm p-6 sm:p-10 rounded-4xl shadow-2xl mx-4 sm:mx-0">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 leading-tight">
                     Get to
                     <br />
                     Know Me
                  </h2>
                  <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-medium">
                     A 3rd Year College Student from Cordova Public College.
                  </p>

                  <Button className="bg-[#3D3D3D] text-[#E5E5E5] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-md w-full sm:w-auto">
                     Contact Me
                  </Button>
               </div>
            </div>
         </main>
         <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/5 to-transparent pointer-events-none"></div>
      </div>
   );
}
