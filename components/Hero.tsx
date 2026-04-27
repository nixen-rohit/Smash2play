"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TennisHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Img/hero-bg.png"
          alt="Sky Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Headline Layer */}
      <div className="relative z-10 flex h-full flex-col justify-start mt-16 md:mt-24 lg:mt-15 px-6 md:px-10 lg:px-20">
        {/* Trusted By Badge */}
        <div className="mb-4">
          <p className="text-[10px] md:text-xs font-semibold text-white/90 tracking-[0.2em] uppercase border-l-2 border-white pl-3">
            Trusted by 1000+ players <br />
            <span className="text-white/60 font-normal">Across Delhi NCR</span>
          </p>
        </div>

        {/* TABLET CHANGE: Changed md:hidden to lg:hidden to keep words stacked on tablets */}
        <h1 className="text-[20vw] md:text-[16vw] lg:text-[17vw] 2xl:text-[18vw] font-[AlumSemibold] leading-[0.8] md:leading-[0.9] lg:leading-[.8] tracking-tighter text-white/90">
          Play<span className="text-white/70">.</span>{" "}
          <br className="lg:hidden" />
          Train<span className="text-white/70">.</span>{" "}
          <br className="lg:hidden" />
          Compete<span className="text-white/70">.</span>
        </h1>
      </div>

      {/* 3. Floating Player */}
      <motion.div
        /* TABLET CHANGE: Adjusted md:right and md:h for tablet portrait scaling */
        className="absolute top-37 right-[-10%] md:right-0 lg:right-[5%] z-20 h-[50vh] md:h-[70vh] lg:h-[80vh] w-[90vw] md:w-[80vw] lg:w-[60vw]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/Img/play.png"
          alt="Tennis Player Jumping"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* 4. Text Card & Buttons Layer */}
      <div className="absolute left-6 md:left-10 lg:left-20 bottom-20 md:bottom-12 lg:bottom-15 2xl:bottom-18 z-30 flex flex-col gap-6 max-w-[80vw] md:max-w-md lg:max-w-[50%] 2xl:max-w-sm">
        <div className="rounded-sm bg-white/10 p-4 md:p-8 lg:p-6 shadow-xl backdrop-blur-md border border-white/10">
          <p className="text-lg md:text-3xl lg:text-xl font-medium leading-tight md:leading-snug text-white">
            Book premium sports venues, train with expert coaches,{" "}
            <br className="hidden lg:block" /> or host unforgettable events —
            all in one place.
          </p>
        </div>

        {/* TABLET CHANGE: flex-col maintained through md, sm:flex-row changed to lg:flex-row 
            This ensures buttons stay stacked on tablet but go side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 px-6 h-12 md:h-16 lg:h-12 bg-white text-gray-900 font-bold md:text-xl lg:text-base rounded-sm shadow-md hover:bg-gray-100 transition whitespace-nowrap">
            Book A Slot <span>&rarr;</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-6 h-12 md:h-16 lg:h-12 bg-white text-gray-900 font-bold md:text-xl lg:text-base rounded-sm shadow-md hover:bg-gray-100 transition whitespace-nowrap">
            Explore Venue <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TennisHero;
