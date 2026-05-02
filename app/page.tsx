import HowItsWorkSection from "@/components/HowItsWorkSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

import NewHero from "@/components/NewHero";
import Carousel from "@/components/Carousel";

import Location from "@/components/Location";
import Testimonial from "@/components/Testimonial";
import VenuePartnershipSection from "@/components/VenuePartnershipSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <NewHero />

      <ProblemSection />
      <SolutionSection />
      <HowItsWorkSection />
      <VenuePartnershipSection />          
      <Carousel />
      <EventsSection/>
      <Location />
      <Testimonial />
      <Footer/> 
      
    </div>
  );
};

export default page;
