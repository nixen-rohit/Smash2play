import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full bg-zinc-100 text-black">
      <Hero />
      <ProblemSection />  
    </div>
  );
};

export default page;
