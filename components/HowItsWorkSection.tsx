"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiTennisBallFill } from "react-icons/pi";

const HowItsWorkSection = () => {
  const steps = [
    {
      title: "Premium Infrastructure",
      description:
        "Access world-class facilities designed for peak performance and a better playing experience.",
      accent: "better experience",
    },
    {
      title: "Multiple Sports",
      description:
        "From Tennis to Padel, engage in a variety of sports to keep your training versatile and fun.",
      accent: "more engagement",
    },
    {
      title: "Community-Driven",
      description:
        "Connect with like-minded players and build lasting relationships that keep you coming back.",
      accent: "people come back",
    },
    {
      title: "Events & Coaching",
      description:
        "Professional coaching and organized tournaments create a complete ecosystem for growth.",
      accent: "complete ecosystem",
    },
  ];

  return (
    <section className="bg-(--dark-bg) text-(--dark-text) pb-20 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Branding & Title */}
        <div className="lg:col-span-5 flex flex-col justify-center">
         <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex w-[10vw] items-center justify-center gap-2 py-2 rounded-full bg-(--highlight) text-(--dark-text) font-semibold text-sm mb-6"
          >
            <span>How It Works</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            <div className="  flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight md:leading-[1.1] tracking-tight md:tracking-tighter">
                WHY <br className="hidden sm:block" />
                SMASH2PLAY <br className="hidden sm:block" />
                WORKS —
              </h2>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="hidden md:flex shrink-0"
              >
                <HiArrowLongRight className="text-(--highlight) text-5xl lg:text-7xl font-light" />
              </motion.div>
            </div>

            <h3 className="mt-8 md:mt-12 text-base sm:text-lg md:text-2xl font-medium text-(--dark-text) leading-relaxed max-w-full sm:max-w-lg md:max-w-md">
              Smash2Play is the ultimate destination for athletes, combining
              top-tier facilities with a vibrant community.
            </h3>
          </motion.div>
        </div>

        {/* Right Side: Step Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-(--dark-text) p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[260px] sm:min-h-[280px] md:min-h-[320px] group"
            >
              {/* Corner Icon */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 text-(--highlight)/20 group-hover:text-(--highlight) transition-colors duration-500">
                <PiTennisBallFill className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>

              <div className="pr-8 sm:pr-10 text-(--dark-bg)">
                <h4 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 tracking-tight leading-snug">
                  {step.title}
                </h4>
                <p className=" leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 md:mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-(--highlight) font-bold wrap-break-word">
                  {step.accent}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItsWorkSection;
