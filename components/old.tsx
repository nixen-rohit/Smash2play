"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TennisHero = () => {
  return (
    /* The parent is now a Grid. Everything inside will stack in row 1, col 1 */
    <section className="grid min-h-screen w-full grid-cols-1 grid-rows-1 overflow-hidden">
      {/* 1. Background Layer */}
      <div className="col-start-1 row-start-1 h-full w-full">
        <Image
          src="/Img/hero-bg.png"
          alt="Sky Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Content Layer (Text, Player, Card) */}
      <div className="col-start-1 row-start-1 z-10 flex flex-col justify-between p-6 md:p-12 lg:p-20">
        {/* Top Section: Trusted Badge & Headline */}
        <header>
          <div className="mb-6">
            <p className="border-l-2 border-white py-1 pl-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 md:text-xs">
              Trusted by 1000+ players <br />
              <span className="font-normal text-white/60">
                Across Delhi NCR
              </span>
            </p>
          </div>

          <h1 className="text-[20vw] font-[AlumSemibold] leading-[0.85] tracking-tighter text-white/90 md:text-[16vw] lg:text-[14vw] xl:text-[12vw]">
            Play<span className="text-white/70">.</span>
            <br className="lg:hidden" />
            Train<span className="text-white/70">.</span>
            <br />
            Compete<span className="text-white/70">.</span>
          </h1>
        </header>

        {/* Bottom Section: Text Card & Buttons */}
        <div className="mt-auto max-w-xl space-y-6 lg:max-w-lg">
          <div className="rounded-sm border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-md md:p-8 lg:p-6">
            <p className="text-lg font-medium leading-tight text-white md:text-3xl lg:text-xl">
              Book premium sports venues, train with expert coaches, or host
              unforgettable events — all in one place.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-row md:gap-4">
            <button className="group flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-white px-8 font-bold text-gray-900 shadow-md transition hover:bg-gray-100 md:h-16 md:text-xl lg:h-12 lg:text-base">
              Book A Slot
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
            <button className="group flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-white px-8 font-bold text-gray-900 shadow-md transition hover:bg-gray-100 md:h-16 md:text-xl lg:h-12 lg:text-base">
              Explore Venue
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Floating Player Layer */}
      {/* We use 'pointer-events-none' so the player doesn't block button clicks */}
      <div className="pointer-events-none col-start-1 row-start-1 flex items-center justify-end overflow-hidden pt-20">
        <motion.div
          className="h-[60vh] w-[90vw] md:h-[75vh] md:w-[70vw] lg:h-[85vh] lg:w-[55vw]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative h-full w-full translate-x-10 lg:translate-x-0">
            <Image
              src="/Img/play.png"
              alt="Tennis Player Jumping"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TennisHero;
