"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NewHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const videoWidth = useTransform(scrollYProgress, [0, 0.5], ["60%", "100%"]);

  const videoRadius = useTransform(scrollYProgress, [0, 0.5], ["24px", "10px"]);

  const gridY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-[#050B0A] text-white"
    >
      {/* 2. Hero Content Section */}
      <div className="pt-40 pb-40 px-6 text-center flex flex-col items-center relative z-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#BEF264] text-[10px] font-black uppercase tracking-[0.4em] mb-6"
        >
          Trusted by 1000+ players across Delhi NCR
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter max-w-5xl mb-8"
        >
          Play. Train. Compete. <br />
          <span className="text-[#BEF264]">All in One Place.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          Book premium sports venues, train with expert coaches, or host
          unforgettable game events - Smash2Play brings everything together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-[#BEF264] text-black px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:brightness-110 transition">
            Book a Slot
          </button>
          <button className="border border-white/20 px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-white/5 transition">
            Explore Venues
          </button>
        </motion.div>
      </div>
      {/* 3. Bottom Grid & Animating Video Section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* The Animating Video Container */}
        <motion.div
          style={{
            width: videoWidth,
            borderRadius: videoRadius,
          }}
          className="relative h-[80vh] md:h-full overflow-hidden shadow-2xl bg-black"
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          >
            <source src="/Video/hero.mp4" type="video/mp4" />
          </video>

          {/* Parallax Grid SVG Overlay */}
          <motion.div
            style={{ y: gridY }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <svg width="100%" height="200%" className="opacity-15">
              <defs>
                <pattern
                  id="grid"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 80 0 L 0 0 0 80"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>

          {/* Bottom darkened vignette */}
          <div className="absolute inset-0 bg-linear-to-t from-[#050B0A] via-transparent to-transparent z-15" />
        </motion.div>
      </div>
    </section>
  );
};

export default NewHero;
