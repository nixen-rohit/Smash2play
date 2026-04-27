"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineExclamationTriangle,
  HiOutlineClock,
  HiOutlineAcademicCap,
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
} from "react-icons/hi2";

const ProblemSection = () => {
  const problems = [
    {
      text: "Poor quality grounds",
      icon: <HiOutlineExclamationTriangle className="w-6 h-6" />,
    },
    {
      text: "No availability when you want",
      icon: <HiOutlineClock className="w-6 h-6" />,
    },
    {
      text: "No proper coaching",
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
    },
    {
      text: "No organized experience",
      icon: <HiOutlineClipboardDocumentCheck className="w-6 h-6" />,
    },
    {
      text: "No community",
      icon: <HiOutlineUsers className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-[AlumSemibold] uppercase tracking-[0.3em] text-(--sky-color) mb-3 block"
          >
            The Current Reality
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-[AlumSemibold] leading-[0.9] tracking-tighter text-slate-900 max-w-3xl"
          >
            Why Finding Good Sports Facilities is Hard.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left: Clean, Minimalist Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] lg:h-full min-h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src="/Img/hero-bg.png"
              alt="Frustrated athlete on court"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle Gradient overlay to add depth */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
          </motion.div>

          {/* Right: List of Pain Points */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-4">
              {problems.map(({ text, icon }, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center gap-6 p-5 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 text-slate-400 group-hover:bg-(--sky-color) group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>
                  <div className="flex items-center flex-1">
                    <span className="text-slate-300 mr-3 text-2xl">—</span>
                    <p className="text-xl md:text-2xl font-[AlumSemibold] text-slate-700 tracking-tight">
                      {text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center-aligned Quote at the end */}
        <div className="mt-24 md:mt-40 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-3xl md:text-8xl font-[AlumSemibold] text-slate-900 leading-[1.1] tracking-tighter italic">
              “So playing becomes a hassle… <br />
              <span className="text-lime-500 not-italic">
                and you stop showing up.”
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
