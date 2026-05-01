"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaDumbbell, FaTrophy, FaUsers, FaArrowRight } from "react-icons/fa";
import { FaFutbol } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";

const pillars = [
  {
    title: "Play",
    description: "Book badminton, cricket, football & pickleball",
    subtext: "Easy booking. Premium experience",
    icon: <FaFutbol className="w-8 h-8 text-(--green)" />,
  },
  {
    title: "Train",
    description: "Structured coaching for all levels",
    subtext: "From beginners to competitive players",
    icon: <FaDumbbell className="w-8 h-8 text-(--green)" />,
  },
  {
    title: "Compete",
    description: "Tournaments & leagues",
    subtext: "Play with the best, grow your game",
    icon: <FaTrophy className="w-8 h-8 text-(--green)" />,
  },
  {
    title: "Community",
    description: "Play with friends or meet new players",
    subtext: "Sports becomes consistent and social",
    icon: <FaUsers className="w-8 h-8 text-(--green)" />,
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
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--green)/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--green)/5 rounded-full blur-3xl" />
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
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--green)/10 border border-(--green)/20 text-(--green) font-semibold text-sm mb-6"
          >
            <FiCheckCircle className="w-4 h-4" />
            <span>The Complete Ecosystem</span>
          </motion.div>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: "var(--green)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-3xl p-6 lg:p-8 bg-(--card-bg) border border-(--green)/10 hover:border-(--green)/40 hover:shadow-lg hover:shadow-(--green)/5 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-(--green)/10 border border-(--green)/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-(--green)/20 transition-all duration-300">
                {pillar.icon}
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-(--dark-text) mb-3">
                {pillar.title}
              </h3>

              <p className="text-(--p) font-medium mb-3">
                {pillar.description}
              </p>

              <p className="text-(--green)/90 text-sm leading-relaxed">
                {pillar.subtext}
              </p>

              {/* Hover CTA */}
              <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-1.5 text-(--green) text-sm font-medium">
                  Learn more{" "}
                  <FaArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
