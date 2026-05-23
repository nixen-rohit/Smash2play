/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Videosec() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showCenterButton, setShowCenterButton] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync state with video play/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  // Show/Hide center button on mouse move when playing
  const handleMouseMove = () => {
    setShowCenterButton(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setShowCenterButton(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!isPlaying) {
      setShowCenterButton(true);
    } else {
      handleMouseMove();
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch((err) => console.log("Play failed:", err));
    } else {
      video.pause();
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={() => togglePlay()}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowCenterButton(false)}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center cursor-pointer select-none"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/Video/herovideo.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/60 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

      {/* Grid Pattern overlay matching Hero.tsx */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="videogrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#videogrid)" />
        </svg>
      </div>

      {/* Center Play/Pause Button Overlay */}
      <AnimatePresence>
        {showCenterButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-10"
          >
            <button
              onClick={togglePlay}
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-black/40 hover:bg-(--highlight) border-2 border-white/40 hover:border-(--highlight) text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(240,76,36,0.5)] group"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                // Pause Icon
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 transform group-hover:scale-105 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                // Play Icon (adjusted padding-left for optical centering)
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 pl-1 transform group-hover:scale-105 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
