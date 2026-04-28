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
    <section className="bg-[#0B1215] text-white py-24 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Branding & Title */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-8 h-8 rounded-full bg-[#BEF264]" />
            <span className="text-sm font-bold tracking-tight text-[#BEF264]">
              How It Works
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-gray-400 mb-4 leading-relaxed max-w-md">
              Smash2Play is the ultimate destination for athletes, combining
              top-tier facilities with a vibrant community.
            </h3>

            <div className="mt-16 flex items-center gap-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
                WHY <br /> SMASH2PLAY <br /> WORKS —
              </h2>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="hidden md:block"
              >
                <HiArrowLongRight className="text-[#BEF264] text-7xl font-light" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Step Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#141C1F] p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[320px] border border-white/5 group"
            >
              {/* Corner Icon */}
              <div className="absolute top-6 right-6 text-[#BEF264]/20 group-hover:text-[#BEF264]  transition-colors duration-500">
                <PiTennisBallFill size={28} />
              </div>

              <div>
                <span className="text-gray-500 font-bold text-lg block mb-12">
                  Step {index + 1}
                </span>
                <h4 className="text-2xl font-bold mb-4 tracking-tight leading-snug">
                  {step.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#BEF264] font-bold">
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
