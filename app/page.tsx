
import HowItsWorkSection from "@/components/HowItsWorkSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import { Hero } from "@/components/Hero";
import Carousel from "@/components/Carousel";
import HeroDetails from "@/components/HeroDetails";
 

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <HeroDetails/>      
      <Carousel />
      <ProblemSection />
      <SolutionSection />
      <HowItsWorkSection />
       
    </div>
  );
};

export default page;
