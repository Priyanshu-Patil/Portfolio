import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";
import { TapeSection } from "@/components/Tape";
import { AboutSection } from "@/components/About";
import Approach from "@/components/Approach";
import { Projects } from "@/components/Projects";
import { ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { TechSection} from "@/components/Tech";
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
