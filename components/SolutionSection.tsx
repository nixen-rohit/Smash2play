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
  },
  {
    title: "Train",
    description: "Structured coaching for all levels",
    subtext: "From beginners to competitive players",
    icon: <FaDumbbell className="w-8 h-8 text-emerald-500" />,
  },
  {
    title: "Compete",
    description: "Tournaments & leagues",
    subtext: "Play with the best, grow your game",
    icon: <FaTrophy className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Community",
    description: "Play with friends or meet new players",
    subtext: "Sports becomes consistent and social",
    icon: <FaUsers className="w-8 h-8 text-purple-500" />,
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
    <section className="py-24 bg-(--dark-bg) overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--green) text-(--whte-text) font-semibold text-sm mb-6 shadow-sm">
            <FiCheckCircle className="w-4 h-4" />
            <span>The Complete Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-(--dark-text) tracking-tight mb-6">
            Meet <span className="text-(--green)">Smash2Play</span>
          </h2>
          <p className="text-xl text-(--p) leading-relaxed">
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
              className="rounded-3xl p-8 bg-(--card-bg) border border-white/5"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-inner`}
              >
                {pillar.icon}
              </div>

              <h3 className="text-2xl font-bold text-(--dark-text) mb-3">
                {pillar.title}
              </h3>
              <p className="text-(--p) font-medium mb-3">
                {pillar.description}
              </p>
              <p className="text-(--green) text-sm leading-relaxed">
                {pillar.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
