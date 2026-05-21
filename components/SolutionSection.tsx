"use client";

import { motion, Variants } from "framer-motion";
import { FaDumbbell, FaTrophy, FaUsers } from "react-icons/fa";
import { FaFutbol } from "react-icons/fa6";

const pillars = [
  {
    title: "Play",
    description: "Book badminton, cricket, football & pickleball",
    subtext: "Easy booking. Premium experience",
    icon: <FaFutbol className="w-8 h-8 text-(--highlight)" />,
  },
  {
    title: "Train",
    description: "Structured coaching for all levels",
    subtext: "From beginners to competitive players",
    icon: <FaDumbbell className="w-8 h-8 text-(--highlight)" />,
  },
  {
    title: "Compete",
    description: "Tournaments & leagues",
    subtext: "Play with the best, grow your game",
    icon: <FaTrophy className="w-8 h-8 text-(--highlight)" />,
  },
  {
    title: "Community",
    description: "Play with friends or meet new players",
    subtext: "Sports becomes consistent and social",
    icon: <FaUsers className="w-8 h-8 text-(--highlight)" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Increased stagger for better "expansion" visibility
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 40,
    // This creates the "stacked" starting point
    x: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

export default function SolutionSection() {
  return (
    <section className="pt-20 bg-(--dark-bg) overflow-hidden relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--highlight) text-(--dark-text) font-semibold text-sm mb-6"
          >
            <span>The Complete Ecosystem</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-(--dark-text) tracking-tight mb-6">
            Meet <span className="text-(--highlight)">Smash2Play</span>
          </h2>

          <p className="text-xl text-(--dark-text) leading-relaxed">
            A complete sports ecosystem — play, train, and compete with
            world-class infrastructure and a strong community.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                borderColor: "var(--highlight)",
              }}
              className="group relative rounded-3xl p-6 lg:p-8 bg-(--dark-text) flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-(--highlight)/10 border border-(--highlight) flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                {pillar.icon}
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-(--dark-bg) mb-3">
                {pillar.title}
              </h3>

              <p className="font-medium mb-3">{pillar.description}</p>

              <p className="text-(--highlight)/90 text-sm leading-relaxed mb-3">
                {pillar.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
