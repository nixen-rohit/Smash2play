

const HeroDetails = () => {
  return (
    <section className=" hidden lg:flex  text-white h-[50vh] w-full  bg-black   justify-center items-center  pb-10 ">
      <div className="mx-auto max-w-4xl text-center ">
        {/* Main Paragraph */}
        <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-muted-foreground md:text-3xl lg:text-[2rem] lg:leading-snug">
          Book premium sports venues, train with expert coaches, or host
          unforgettable game events — Smash2Play brings everything together.
        </p>

        {/* Trust Tagline */}
        <p className="py-6 text-sm font-medium tracking-wide text-white/70 md:text-base lg:text-lg ">
          Trusted by 1000+ players across Delhi NCR
        </p>

        {/* Action Buttons */}

        <div className="  flex w-full flex-col items-center justify-center gap-3 px-4 sm:mt-10 sm:flex-row sm:gap-4">
          <button className=" w-full max-w-[280px] rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
            Book a Slot
          </button>

          <button className="  w-full max-w-[280px] rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
            Explore Venues
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroDetails;
