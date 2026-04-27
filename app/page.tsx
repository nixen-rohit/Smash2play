import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <div className="h-screen w-full bg-zinc-100 text-black">
      <Carousel />       
      <Hero />
      <ProblemSection />
      <SolutionSection />
    </div>
  );
};

export default page;
