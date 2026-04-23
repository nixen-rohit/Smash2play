"use client";

import { MouseEvent } from "react";

interface ButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

interface PerspectiveTextProps {
  label: string;
  textColor?: string;
}

export default function Button({ isActive, toggleMenu }: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleMenu();
  };

  return (
    <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden text-black">
      <div
        className="relative w-full h-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ top: isActive ? "-100%" : "0%" }}
      >
        {/* Menu State */}
        <div
          className="w-full h-full bg-[#c9fd74] flex group"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClick(e as unknown as MouseEvent<HTMLDivElement>)}
        >
          <PerspectiveText label="Menu" />
        </div>

        {/* Close State */}
        <div
          className="w-full h-full bg-black flex group"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClick(e as unknown as MouseEvent<HTMLDivElement>)}
        >
          <PerspectiveText label="Close" textColor="text-[#c9fd74]" />
        </div>
      </div>
    </div>
  );
}

function PerspectiveText({ label, textColor = "text-black" }: PerspectiveTextProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full transform-style-3d transition-transform duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:transform-[rotateX(90deg)]">
      {/* Front face */}
      <p
        className={`m-0 uppercase pointer-events-none transition-all duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-hover:opacity-0 ${textColor}`}
      >
        {label}
      </p>

      {/* Back face (flipped) */}
      <p
        className={`m-0 uppercase pointer-events-none absolute transform-origin-[bottom_center] transform-[rotateX(-90deg)_translateY(9px)] opacity-0 group-hover:opacity-100 transition-all duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] ${textColor}`}
      >
        {label}
      </p>
    </div>
  );
}