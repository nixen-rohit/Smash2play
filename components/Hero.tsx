"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TennisHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Img/sky-bg.png"
          alt="Sky Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Headline Layer - Includes Trusted By text at the top */}
      <div className="relative z-10 flex h-full flex-col justify-start mt-16 md:mt-24 lg:mt-15 px-6 md:px-10 lg:px-20">
        {/* Trusted By Badge moved to top */}
        <div className="mb-4">
          <p className="text-[10px] md:text-xs font-semibold text-white/90 tracking-[0.2em] uppercase border-l-2 border-white pl-3">
            Trusted by 1000+ players <br />
            <span className="text-white/60 font-normal">Across Delhi NCR</span>
          </p>
        </div>

        <h1 className="text-[20vw] md:text-[14vw] lg:text-[17vw] font-[AlumSemibold] leading-[0.8] md:leading-[0.9] lg:leading-[.8] tracking-tighter text-white/90">
          Play<span className="text-white/70">.</span>{" "}
          <br className="md:hidden" />
          Train<span className="text-white/70">.</span>{" "}
          <br className="md:hidden" />
          Compete<span className="text-white/70">.</span>
        </h1>
      </div>

      {/* 3. Floating Player */}
      <motion.div
        className="absolute top-30 right-[-10%] md:right-[5%] z-20 h-[50vh] md:h-[80vh] w-[90vw] md:w-[60vw]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/Img/player1.webp"
          alt="Tennis Player Jumping"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* 4. Text Card & Buttons Layer */}
      <div className="absolute left-6 md:left-20 bottom-10 md:bottom-16 lg:bottom-8 z-30 flex flex-col gap-6 max-w-[85vw] md:max-w-[320px]">
        <div className="rounded-sm bg-white/10 p-4 md:p-6 shadow-xl backdrop-blur-md border border-white/10">
          <p className="text-xs md:text-sm font-medium leading-snug text-white">
            Book premium sports venues, train with expert coaches, or host
            unforgettable events — all in one place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 px-6 h-12 bg-white text-gray-900 font-semibold rounded-sm shadow-md hover:bg-gray-100 transition whitespace-nowrap">
            Book A Slot <span>&rarr;</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-6 h-12 bg-white text-gray-900 font-semibold rounded-sm shadow-md hover:bg-gray-100 transition whitespace-nowrap">
            Explore Venue <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TennisHero;
