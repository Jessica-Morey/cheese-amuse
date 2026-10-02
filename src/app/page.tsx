import { MotionConfig } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Course from "@/components/Course";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import SoundToggle from "@/components/SoundToggle";
import { SoundProvider } from "@/components/SoundProvider";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <SoundProvider>
        <Nav />
        <main>
          <Hero />
          <Concept />
          <Course />
          <ComingSoon />
        </main>
        <Footer />
        <SoundToggle />
      </SoundProvider>
    </MotionConfig>
  );
}
