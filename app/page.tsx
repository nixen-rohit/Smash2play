import Hero from "@/components/Hero";
import HowItsWorkSection from "@/components/HowItsWorkSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      
      <Hero />
      <Carousel />      
      <ProblemSection />
      <SolutionSection />
      <HowItsWorkSection/>
    </div>
  );
};

export default page;
