import { useLenis } from "@/hooks/use-lenis";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { Projects } from "@/components/Projects";
import { Partners } from "@/components/Partners";
import { Team } from "@/components/Team";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Initialize Lenis smooth scrolling for the entire app
  useLenis();

  return (
    <main className="bg-background text-foreground relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Vision />
      <Services />
      <Showreel />
      <Projects />
      <Partners />
      <Team />
      <Careers />
      <Footer />
    </main>
  );
};

export default Index;
