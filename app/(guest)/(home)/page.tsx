import Mainlayout from "@/components/ui/mainlayout";
import { ProjectShowcase } from "@/components/ui/projectshowcase";
import { ContactSection } from "@/components/ui/contact";

export default function HomePage() {
   return (
      <div className="min-h-screen font-sans overflow-hidden relative">
         <Mainlayout/>
         <ProjectShowcase />
         <ContactSection />
      </div>
   );
}
