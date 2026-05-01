import HowItsWorkSection from "@/components/HowItsWorkSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import { Hero } from "@/components/Hero";
import NewHero from "@/components/NewHero";
import Carousel from "@/components/Carousel";
import HeroDetails from "@/components/HeroDetails";
import Location from "@/components/Location";
import Testimonial from "@/components/Testimonial";
import Test from "@/components/test";
import EventsSection from "@/components/EventsSection";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <NewHero />
      {/* <Hero />
      <HeroDetails /> */}
      <ProblemSection />
      <SolutionSection />
      <HowItsWorkSection />
      {/* tick */}

      {/* NEW SECTION */}
      {/*  PARTNERSHIP MODELS */}
      <Carousel />

      <EventsSection/>
      <Test />

      {/* event section */}

      <Location />
      <Testimonial />
      {/* FUTURE SECTION (OPTIONAL BUT POWERFUL) */}

      
    </div>
  );
};

export default page;
