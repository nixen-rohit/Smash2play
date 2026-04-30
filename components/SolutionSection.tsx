"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { FaDumbbell, FaTrophy, FaUsers } from "react-icons/fa";
import { FaFutbol } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";

const pillars = [
  {
    title: "Play",
    description: "Book badminton, cricket, football & pickleball",
    subtext: "Easy booking. Premium experience",
    icon: <FaFutbol className="w-8 h-8 text-blue-500" />,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "Train",
    description: "Structured coaching for all levels",
    subtext: "From beginners to competitive players",
    icon: <FaDumbbell className="w-8 h-8 text-emerald-500" />,
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    title: "Compete",
    description: "Tournaments & leagues",
    subtext: "Play with the best, grow your game",
    icon: <FaTrophy className="w-8 h-8 text-amber-500" />,
    color: "from-amber-500 to-orange-400",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    title: "Community",
    description: "Play with friends or meet new players",
    subtext: "Sports becomes consistent and social",
    icon: <FaUsers className="w-8 h-8 text-purple-500" />,
    color: "from-purple-500 to-pink-400",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SolutionSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 shadow-sm">
            <FiCheckCircle className="w-4 h-4" />
            <span>The Complete Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Meet{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Smash2Play
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            A complete sports ecosystem — play, train, and compete with
            world-class infrastructure and a strong community.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-8 bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 relative overflow-hidden group"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${pillar.color} opacity-5 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500`}
              />

              <div
                className={`w-16 h-16 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6 shadow-inner`}
              >
                {pillar.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-slate-700 font-medium mb-3">
                {pillar.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {pillar.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
