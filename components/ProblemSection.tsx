"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { LuMapPin, LuClock4, LuClipboardX } from "react-icons/lu";
import { FaUserTimes } from "react-icons/fa";
import { IconType } from "react-icons";
import { HiUserGroup } from "react-icons/hi2";

interface Problem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

const problems: Problem[] = [
  {
    id: 1,
    title: "Poor quality grounds",
    description:
      "Lack of standardization and accessibility leads to a drop in performance and long-term engagement.",
    icon: LuMapPin,
  },
  {
    id: 2,
    title: "No availability",
    description:
      "Peak hours are constantly overbooked, leaving athletes with no consistent place to train.",
    icon: LuClock4,
  },
  {
    id: 3,
    title: "No proper coaching",
    description:
      "Finding certified professionals who can actually improve your game remains a major hurdle.",
    icon: FaUserTimes,
  },
  {
    id: 4,
    title: "No organized experience",
    description:
      "The lack of digital infrastructure makes booking and tracking progress unnecessarily manual.",
    icon: LuClipboardX,
  },
   {
  id: 5,
  title: "No community",
  description:
    "Without community, athletes miss out on motivation, collaboration, and opportunities to grow together.",
  icon: HiUserGroup,
}
];

const ProblemSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for the vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#bef365] text-black px-4 py-1.5 rounded-full text-xs font-bold mb-6 inline-block"
          >
            Problem Analysis
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Why the Current <br /> System is Broken
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The Vertical Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0  w-0.5 bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-[#bef365] shadow-[0_0_15px_#bef365]"
            />
          </div>

          <div className="space-y-20 md:space-y-0">
            {problems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-center justify-between md:mb-12"
                >
                  {/* Left Side Content */}
                  <div
                    className={`w-full md:w-[42%] ${isEven ? "md:order-1" : "md:order-3  "}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="bg-[#141C1F] rounded-3xl p-8 border border-white/5 hover:border-[#bef365]/30 transition-colors group"
                    >
                      <div className="flex items-center gap-4 mb-4  ">
                        <div className="w-12 h-12 rounded-xl bg-[#0a0f11] flex items-center justify-center text-[#bef365] border border-white/10 group-hover:scale-110 transition-transform">
                          <item.icon size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-white">
                          0{item.id}. {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10 md:order-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-4 h-4 rounded-full bg-[#0a0f11] border-4 border-[#bef365] shadow-[0_0_10px_#bef365]"
                    />
                  </div>

                  {/* Empty space for the opposite side */}
                  <div className="hidden md:block w-[42%] md:order-2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
