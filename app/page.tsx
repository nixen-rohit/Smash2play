import HowItsWorkSection from "@/components/HowItsWorkSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import { Hero } from "@/components/Hero";
import NewHero from "@/components/NewHero";
import Carousel from "@/components/Carousel";
import HeroDetails from "@/components/HeroDetails";
import Location from "@/components/Location";
import Testimonial from "@/components/Testimonial";
import VenuePartnershipSection from "@/components/VenuePartnershipSection";
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
      <VenuePartnershipSection />          
      <Carousel />
      <EventsSection/>
      <Location />
      <Testimonial />
      

      
    </div>
  );
};

export default page;
