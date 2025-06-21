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
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      <SmoothCursor />
      <Header />
      <div id="hero"><HeroSection /></div>
      <TapeSection />
      <div id="about"><AboutSection /></div>
      <TechSection />
      <Approach />
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
}
