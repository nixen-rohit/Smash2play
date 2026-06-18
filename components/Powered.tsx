import React from "react";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Powered = () => {
  return (
    <section className="bg-(--dark-bg) p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-(--dark-text) text-4xl text-center md:text-5xl font-bold mb-6 leading-tight">
          Powered by Callories
        </h2>

        {/* --- Callories Fitness Program Card --- */}
        <div className="bg-(--dark-text) rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center p-4 md:p-8">
          {/* Video Container */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-auto rounded-2xl"
            >
              {/* Replace with your actual video path if needed */}
              <source src="/Video/frame.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-(--dark-bg) relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Want more than <br /> just play?
            </h2>
            <p className="text-lg mb-8 max-w-sm">
              Join Callories — our fitness program designed to help you lose
              weight, build strength, and stay consistent.
            </p>

            <Link
              target="_blank"
              href="https://callories.vercel.app/"
              className="group inline-flex items-center justify-between bg-(--highlight) text-(--dark-text) px-6 py-4 rounded-full font-bold w-fit hover:bg-(--highlight)/80 transition-colors"
            >
              Explore Callories
              <div className="ml-4 rounded-full p-1 ">
                <FaArrowUpRightFromSquare size={18} className="text-(--dark-text)" />
              </div>
            </Link>
          </div>
        </div>

        {/* --- Final CTA Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl text-(--dark-text) font-black leading-tight uppercase italic">
              Don’t Just <br /> Watch Sports. <br /> Be Part of It.
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-end">
            <Link
              target="_blank"
              href="https://callories.vercel.app/"
              className="w-full sm:w-auto text-center bg-(--highlight) text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Book Your Slot
            </Link>
            <Link
              target="_blank"
              href="https://callories.vercel.app/"
              className="w-full sm:w-auto text-center border-2 border-(--highlight) text-(--dark-text) px-10 py-5 rounded-full font-bold text-lg hover:bg-(--highlight) hover:text-(--dark-bg) transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Powered;
