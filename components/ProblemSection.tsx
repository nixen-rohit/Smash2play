"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPinOff, Clock, UserX, ClipboardX } from "lucide-react";

const DashedConnector = ({ index }: { index: number }) => {
  const isLeftToRight = index % 2 === 0;

  return (
    <div
      className="hidden lg:block absolute z-0 pointer-events-none"
      style={{
        top: "80%", // Starts near the bottom of the current card
        height: "160px", // The vertical distance to the next card
        width: "100%",
        left: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 150"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          // Dynamic Path Logic
          d={
            isLeftToRight
              ? "M 250 0 V 40 Q 250 75 500 75 H 700 Q 750 75 750 110 V 150" // Left to Right "S"
              : "M 750 0 V 40 Q 750 75 500 75 H 300 Q 250 75 250 110 V 150" // Right to Left "S"
          }
          stroke="#D1D5DB"
          strokeWidth="2"
          strokeDasharray="8 8"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#D1D5DB" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      id: 1,
      title: "Poor quality grounds",
      icon: MapPinOff,
      duration: "1 Week",
      color: "bg-[#064E3B]",
    },
    {
      id: 2,
      title: "No availability",
      icon: Clock,
      duration: "2 Weeks",
      color: "bg-[#1F2937]",
    },
    {
      id: 3,
      title: "No proper coaching",
      icon: UserX,
      duration: "1-2 Days",
      color: "bg-[#1F2937]",
    },
    {
      id: 4,
      title: "No organized experience",
      icon: ClipboardX,
      duration: "1-2 Days",
      color: "bg-[#064E3B]",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Content */}
        <div className="mb-24 text-center md:text-left">
          <span className="bg-[#BEF264] text-green-900 px-4 py-1.5 rounded-full text-xs font-bold mb-6 inline-block">
            Problem Analysis
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Why the Current <br /> System is Broken
          </h2>
          <p className="text-gray-500 max-w-xl text-lg">
            We’ve mapped out the friction points that prevent athletes from
            staying consistent and reaching their peak.
          </p>
        </div>

        {/* The Zig-Zag List */}
        <div className="relative flex flex-col items-center">
          {problems.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex w-full mb-32 last:mb-0 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Connector logic - connects 1->2, 2->3, 3->4 */}
              {index < problems.length - 1 && <DashedConnector index={index} />}

              {/* The Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-[45%] bg-[#F8FAF2] rounded-[40px] p-8 flex gap-6 z-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Vertical Pill Label */}
                <div
                  className={`w-10 rounded-full flex items-center justify-center shrink-0 ${item.color}`}
                >
                  <span className="text-white text-[10px] font-bold uppercase rotate-180 [writing-mode:vertical-lr] py-4">
                    {item.duration}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-700 shadow-sm">
                      <item.icon size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.id}. {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lack of standardization and accessibility leads to a drop in
                    performance and long-term engagement.
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
