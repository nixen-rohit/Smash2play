"use client";

import Image from "next/image";
 
const sideImages = [
  {
    src: "/Img/hero-badminton.jpg",
    alt: "Badminton",
    position: "left",
    span: 1,
  },
  { src: "/Img/hero-cricket.png", alt: "Cricket", position: "left", span: 1 },
  {
    src: "/Img/hero-pickelball.png",
    alt: "Pickleball",
    position: "right",
    span: 1,
  },
  {
    src: "/Img/hero-football.jpg",
    alt: "Football",
    position: "right",
    span: 1,
  },
];

// Add progress as a prop
export default function Hero({ progress }: { progress: number }) {
 
  

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  // Sync internal logic with passed progress
 
  const imageProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.8));

  const centerWidth = isDesktop
    ? 100 - imageProgress * 58
    : 100 - imageProgress * 10;
  const centerHeight = isDesktop
    ? 100 - imageProgress * 30
    : 100 - imageProgress * 50;

  const sideWidth = imageProgress * 22;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100;
  const sideTranslateRight = 100 - imageProgress * 100;
  const borderRadius = imageProgress * 24;
  const gap = imageProgress * 16;

  return (
    <div className="h-full w-full bg-black">
      <div
        className="flex h-full w-full items-stretch justify-center"
        style={{
          gap: `${gap}px`,
          padding: `${imageProgress * 16}px`,
          paddingBottom: `${imageProgress * 40}px`,
        }}
      >
        {/* Left Column */}
        <div
          className="hidden flex-col lg:flex"
          style={{
            width: `${sideWidth}%`,
            gap: `${gap}px`,
            transform: `translateX(${sideTranslateLeft}%)`,
            opacity: sideOpacity,
          }}
        >
          {sideImages
            .filter((img) => img.position === "left")
            .map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden border-2 border-white/20"
                style={{ flex: img.span, borderRadius: `${borderRadius}px` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
        </div>

        {/* Main Center Video */}
        <div
          className="relative overflow-hidden border-2 border-white/20"
          style={{
            width: `${centerWidth}%`,
            height: `${centerHeight}%`,
            borderRadius: `${borderRadius}px`,
            alignSelf: "center",
          }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Video/hero.mp4" type="video/mp4" />
          </video>
 
        </div>

        {/* Right Column */}
        <div
          className="hidden flex-col lg:flex"
          style={{
            width: `${sideWidth}%`,
            gap: `${gap}px`,
            transform: `translateX(${sideTranslateRight}%)`,
            opacity: sideOpacity,
          }}
        >
          {sideImages
            .filter((img) => img.position === "right")
            .map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden border-2 border-white/20"
                style={{ flex: img.span, borderRadius: `${borderRadius}px` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
