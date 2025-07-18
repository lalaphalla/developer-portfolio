import Contact from "@/component/contact";
import HeroSection from "@/component/hero";
import Navbar from "@/component/navbar";
import Project from "@/component/projects";
import SkillSection from "@/component/skill";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="w-full flex-col justify-center">
        <div className="container mx-auto">
          <Navbar />
        </div>
        <HeroSection />
        {/* <Experience /> */}
        <Project />

        <SkillSection />

        <Contact />
      </div>
    </div>
  );
}
