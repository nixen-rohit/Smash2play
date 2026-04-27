import Hero from "@/components/Hero";
import HowItsWorkSection from "@/components/HowItsWorkSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <div className="h-screen w-full bg-zinc-100 text-black">
      
      <Hero />
      <Carousel />      
      <ProblemSection />
      <SolutionSection />
      <HowItsWorkSection/>
    </div>
  );
};

export default page;
