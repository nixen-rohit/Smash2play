import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Powered = () => {
  return (
    <section className="bg-(--white-bg) p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-4xl text-center md:text-5xl font-bold mb-6 leading-tight">
          Powered by Callories
        </h2>

        {/* --- Callories Fitness Program Card --- */}
        <div className="bg-(--dark-bg)/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center p-4 md:p-8 border-2 border-(--highlight)/10">
          {/* Image Container */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-[30px] overflow-hidden">
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-500">
              {/* Replace with your actual image path */}
              <Image
                src="/Img/Powered.jpg"
                alt="Fitness Program"
                loading="eager"
                width={600}
                height={600}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-(--white-text) relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Want more than <br /> just play?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-sm">
              Join Callories — our fitness program designed to help you lose
              weight, build strength, and stay consistent.
            </p>

            <Link
              target="_blank"
              href="https://callories.vercel.app/"
              className="inline-flex items-center justify-between bg-(--highlight) text-black px-6 py-4 rounded-full font-bold w-fit hover:bg-white transition-colors group"
            >
              Explore Callories
              <div className="ml-4 rounded-full p-1 ">
                <FaArrowUpRightFromSquare size={18} className="text-(--dark-bg)" />
              </div>
            </Link>
          </div>
        </div>

        {/* --- Final CTA Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-black text-black leading-tight uppercase italic">
              Don’t Just <br /> Watch Sports. <br /> Be Part of It.
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-end">
            <Link
              target="_blank"
              href="https://callories.vercel.app/"
              className="w-full sm:w-auto text-center bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Book Your Slot
            </Link>
            <Link
              target="_blank"
              href="https://callories.vercel.app/"
              className="w-full sm:w-auto text-center border-2 border-black text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black hover:text-white transition-all"
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
