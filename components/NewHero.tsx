"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Hero from "@/components/Hero";

const NewHero = () => {
  const containerRef = useRef(null);
  const [heroProgress, setHeroProgress] = useState(0);

  // We keep 300vh to give enough "breathing room"
  // for the video to finish and then stay still before moving to next section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5) {
      const internalProgress = (latest - 0.5) * 2; // Normalizes 0.5-1.0 range to 0.0-1.0
      setHeroProgress(internalProgress);
    } else {
      setHeroProgress(0);
    }
  });
  // 1. Video Animation: Moves from bottom to top.
  // It finishes exactly at 0.5 (middle of the scroll) so it stays pinned for the rest.

  // 3. Content Animation: Fades out before the video covers it
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // 4. Parallax
  const img1Parallax = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const img2Parallax = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  // Animation for the Hero layer coming up
  const heroY = useTransform(scrollYProgress, [0.3, 0.55], ["100%", "0%"]);
  return (
    <section
      ref={containerRef}
      // Height controls how "long" the user scrolls to finish the animation
      className="relative h-[300vh] bg-[#050B0A] text-white"
    >
      {/* Sticky container ensures everything stays in viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* 1. Hero Content Section (The Text and Floating Icons) */}
        <motion.div
          style={{
            opacity: contentOpacity,
            scale: contentScale,
            // Hide pointer events when faded out so video buttons are clickable
            pointerEvents: useTransform(
              scrollYProgress,
              [0.3, 0.4],
              ["auto", "none"],
            ),
          }}
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center w-full"
        >
          {/* Floating Images */}
          <motion.div
            style={{ y: img1Parallax }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[5%] w-32 h-32 md:w-56 md:h-56 hidden sm:block pointer-events-none"
          >
            <Image
              src="/Img/shutel.png"
              alt="Shuttle"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          <motion.div
            style={{ y: img2Parallax }}
            animate={{ y: [0, 25, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-[15%] right-[5%] w-36 h-36 md:w-64 md:h-64 hidden sm:block pointer-events-none"
          >
            <Image
              src="/Img/pickeball.png"
              alt="Pickle"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Text Content */}
          <div className="max-w-4xl relative z-30">
            <motion.p className="text-[#BEF264] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-6">
              Trusted by 1000+ players across Delhi NCR
            </motion.p>
            <h2 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-8">
              Play. Train. Compete. <br />
              <span className="text-[#BEF264]">All in One Place.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Book premium sports venues, train with expert coaches, or host
              unforgettable game events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#BEF264] text-black px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                Book a Slot
              </button>
              <button className="border border-white/20 px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-white/5 transition">
                Explore Venues
              </button>
            </div>
          </div>
        </motion.div>

        {/* Layer 2: The Bento Hero Component */}
<motion.div
  style={{ y: heroY }}
  initial={{
    width: "70%",
    height: "420px", // keeps the trending/video section height
    left: "50%",
    x: "-50%",
    bottom: "2rem", // starts near bottom like a trending hero card
    borderRadius: "24px",
  }}
  animate={{
    width: "100%",
    height: "100vh",
    left: 0,
    x: 0,
    bottom: 0,
    borderRadius: "0px",
  }}
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1], // smoother cinematic expansion
    delay: 0.3,
  }}
  className="absolute z-20 bg-black overflow-hidden"
>
  {/* Bottom trending hero / video expands into fullscreen */}
  <Hero progress={heroProgress} />
</motion.div>
      </div>

      {/* 3. Spacer to handle the transition out */}
      {/* This ensures the scroll continues until the container is done */}
      <div className="h-screen" />
    </section>
  );
};

export default NewHero;
