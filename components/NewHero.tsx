"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/Hero";
const NewHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

 
  return (
    <section
    id="home"
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
        <Hero />
    </section>
  );
};

export default NewHero;
