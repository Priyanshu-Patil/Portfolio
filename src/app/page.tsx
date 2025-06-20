import { Header } from "@/pages/Header";
import { HeroSection } from "@/pages/Hero";
import { TapeSection } from "@/pages/Tape";
import { AboutSection } from "@/pages/About";
import Approach from "@/pages/Approach";
import { Projects } from "@/pages/Projects";
import { ContactSection } from "@/pages/Contact";
import { Footer } from "@/pages/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { TechSection} from "@/pages/Tech";

export default function Home() {
  return (
    <div>
      <SmoothCursor />
      <Header />
      <HeroSection />
      <TapeSection />
      <AboutSection />
      <TechSection />
      <Approach />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}
