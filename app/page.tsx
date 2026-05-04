import HowItsWorkSection from "@/components/HowItsWorkSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Location from "@/components/Location";
import Testimonial from "@/components/Testimonial";
import VenuePartnershipSection from "@/components/VenuePartnershipSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/layout/Footer";
import Powered from "@/components/Powered";

const page = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItsWorkSection />
      <Carousel />
      <VenuePartnershipSection />
      <EventsSection />
      <Location />
      <Testimonial />
      <Powered/>
      <Footer />
    </div>
  );
};

export default page;
