"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FiSliders,
  FiX,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// --- MOCK DATA ---
const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400",
    title: "Smash 2 Play Cricket Box Turf",
    location: "Connaught Place",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6!2d77.219!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77!2sConnaught+Place+Delhi!5e0!3m2!1sen!2sin",
    type: "Delhi",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400",
    title: "Smash 2 Play Badminton Academy",
    location: "Karol Bagh",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.190!3d28.651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77!2sKarol+Bagh+Delhi!5e0!3m2!1sen!2sin",
    type: "Delhi",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400",
    title: "Smash 2 Play Pickleball Court",
    location: "Karol Bagh",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.190!3d28.651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77!2sKarol+Bagh+Delhi!5e0!3m2!1sen!2sin",
    type: "Delhi",
  },

  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400",
    title: "Smash 2 Play Box Cricket & Football Turf",
    location: "Karol Bagh",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.190!3d28.651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77!2sKarol+Bagh+Delhi!5e0!3m2!1sen!2sin",
    type: "Delhi",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400",
    title: "Smash 2 Play Box Cricket Turf",
    location: "Saket",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8!2d77.212!3d28.528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77!2sSaket+Delhi!5e0!3m2!1sen!2sin",
    type: "Delhi",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400",
    title: "Smash 2 Play Badminton Academy",
    location: "Saket",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8!2d77.212!3d28.528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77!2sSaket+Delhi!5e0!3m2!1sen!2sin",
    type: "Delhi",
  },

  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400",
    title: "Smash 2 Play Box Cricket & Football Turf",
    location: "Patel Nagar",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8!2d77.165!3d28.644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77!2sPatel+Nagar+Delhi!5e0!3m2!1sen!2sin",
    type: "Delhi",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400",
    title: "Smash 2 Play Box Cricket & Football Turf",
    location: "Vasundhara",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0!2d77.355!3d28.668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77!2sVasundhara+Ghaziabad!5e0!3m2!1sen!2sin",
    type: "Delhi",
  },
];

const allLocations = [...new Set(listings.map((l) => l.location))].sort();
const QUICK_FILTERS = ["All", "Connaught Place", "Patel Nagar"] as const;
type QuickFilter = (typeof QUICK_FILTERS)[number];

const PAGE_SIZE = 4;

// Build page number buttons with ellipsis: always show first, last, current ±1
function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [];
  const show = new Set(
    [1, total, current, current - 1, current + 1].filter(
      (p) => p >= 1 && p <= total,
    ),
  );
  let prev = 0;
  [...show]
    .sort((a, b) => a - b)
    .forEach((p) => {
      if (p - prev > 1) pages.push("...");
      pages.push(p);
      prev = p;
    });
  return pages;
}

export default function Location() {
  const [quickFilter, setQuickFilter] = useState<QuickFilter>("All");
  const [checkedLocations, setCheckedLocations] = useState<string[]>([]);
  const [tempChecked, setTempChecked] = useState<string[]>([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedId, setSelectedId] = useState(listings[0].id);
  const [currentPage, setCurrentPage] = useState(1);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node))
        setShowFilterModal(false);
    };
    if (showFilterModal) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showFilterModal]);

  const openFilterModal = () => {
    setTempChecked([...checkedLocations]);
    setShowFilterModal(true);
  };

  const applyFilter = () => {
    setCheckedLocations([...tempChecked]);
    if (tempChecked.length > 0) setQuickFilter("All");
    setCurrentPage(1);
    setShowFilterModal(false);
  };

  const toggleTemp = (loc: string) =>
    setTempChecked((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc],
    );

  const hasModalFilter = checkedLocations.length > 0;

  // All filtered results
  const filteredListings = useMemo(() => {
    if (checkedLocations.length > 0)
      return listings.filter((l) => checkedLocations.includes(l.location));
    if (quickFilter === "All") return listings;
    return listings.filter((l) => l.location === quickFilter);
  }, [quickFilter, checkedLocations]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredListings.length / PAGE_SIZE),
  );

  // Clamp page when filter changes
  const safePage = Math.min(currentPage, totalPages);

  // Slice for current page
  const pagedListings = useMemo(
    () =>
      filteredListings.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE),
    [filteredListings, safePage],
  );

  const selectedListing =
    pagedListings.find((l) => l.id === selectedId) ??
    filteredListings.find((l) => l.id === selectedId) ??
    filteredListings[0];
  const mapSrc = selectedListing?.map ?? listings[0].map;

  const handleQuickFilter = (f: QuickFilter) => {
    setQuickFilter(f);
    setCheckedLocations([]);
    setCurrentPage(1);
    const next =
      f === "All" ? listings[0] : listings.find((l) => l.location === f);
    if (next) setSelectedId(next.id);
  };

  const goToPage = (p: number) => {
    setCurrentPage(p);
    // Auto-select first card on the new page
    const first = filteredListings[(p - 1) * PAGE_SIZE];
    if (first) setSelectedId(first.id);
  };

  const pageNumbers = getPageNumbers(safePage, totalPages);

  // Range label e.g. "1 – 4 of 12"
  const rangeStart = (safePage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(safePage * PAGE_SIZE, filteredListings.length);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };
  const itemVars = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen bg-[#F3F4F6] p-4 lg:p-6 gap-4 lg:gap-6 font-sans overflow-hidden">
      {/* LEFT PANEL */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full lg:w-1/2 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-5 lg:p-8 flex flex-col shadow-sm overflow-hidden"
      >
        {/* HEADER */}
        <header className="mb-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            VENUES
          </h1>
          <p className="font-semibold text-gray-500">
            Multiple Locations Across Delhi NCR VENUES
          </p>
          <p className="text-gray-400 mt-1">
            {filteredListings.length} listing
            {filteredListings.length !== 1 ? "s" : ""}
          </p>
        </header>

        {/* FILTER PILLS */}
        <div className="flex gap-2 lg:gap-3 mb-5 flex-shrink-0 flex-wrap items-center">
          {QUICK_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => handleQuickFilter(f)}
              className={`px-4 lg:px-5 py-2 rounded-full border text-xs lg:text-sm font-medium whitespace-nowrap transition-all
                ${
                  quickFilter === f && !hasModalFilter
                    ? "border-orange-500 text-orange-600 bg-orange-50"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
            >
              {f}
            </button>
          ))}

          {/* Filter button */}
          <div className="relative">
            <button
              onClick={openFilterModal}
              className={`flex items-center gap-1.5 px-4 lg:px-5 py-2 rounded-full border text-xs lg:text-sm font-medium whitespace-nowrap transition-all
                ${
                  hasModalFilter
                    ? "border-orange-500 text-orange-600 bg-orange-50"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
            >
              <FiSliders size={13} />
              Filter
              {hasModalFilter && (
                <span className="ml-1 bg-orange-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  {checkedLocations.length}
                </span>
              )}
            </button>

            {/* FILTER DROPDOWN */}
            <AnimatePresence>
              {showFilterModal && (
                <motion.div
                  ref={modalRef}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 w-64"
                >
                  <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-800 text-sm">
                      Filter by Location
                    </span>
                    <button
                      onClick={() => setShowFilterModal(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded-full hover:bg-gray-100"
                    >
                      <FiX size={15} />
                    </button>
                  </div>

                  <div className="px-3 py-2 max-h-60 overflow-y-auto">
                    {allLocations.map((loc) => {
                      const checked = tempChecked.includes(loc);
                      return (
                        <label
                          key={loc}
                          onClick={() => toggleTemp(loc)}
                          className="flex items-center gap-3 px-2 py-2.5 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group"
                        >
                          <span
                            className={`w-[18px] h-[18px] rounded-[5px] border-2 flex items-center justify-center flex-shrink-0 transition-all
                              ${checked ? "bg-orange-500 border-orange-500" : "border-gray-300 group-hover:border-orange-300"}`}
                          >
                            {checked && (
                              <FiCheck
                                size={11}
                                className="text-white"
                                strokeWidth={3}
                              />
                            )}
                          </span>
                          <span className="text-sm text-gray-700 select-none">
                            {loc}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  <div className="flex gap-2 px-4 py-3 border-t border-gray-100">
                    <button
                      onClick={() => setTempChecked([])}
                      className="flex-1 py-2 rounded-xl border border-gray-200 text-xs font-medium text-gray-500 hover:bg-gray-50 transition-all"
                    >
                      Clear
                    </button>
                    <button
                      onClick={applyFilter}
                      className="flex-1 py-2 rounded-xl bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 active:scale-95 transition-all"
                    >
                      Apply
                      {tempChecked.length > 0 ? ` (${tempChecked.length})` : ""}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* LISTING CARDS */}
        <motion.div
          key={`${quickFilter}-${checkedLocations.join(",")}-${safePage}`}
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="flex-1 overflow-y-auto pr-1 space-y-3 no-scrollbar min-h-0"
        >
          {pagedListings.length === 0 ? (
            <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
              No listings found for selected location(s).
            </div>
          ) : (
            pagedListings.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVars}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedId(item.id)}
                className={`flex gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 rounded-[1.5rem] lg:rounded-[2rem] border transition-all cursor-pointer
                  ${
                    selectedId === item.id
                      ? "border-orange-400 bg-orange-50/40"
                      : "border-transparent hover:border-gray-200"
                  }`}
              >
                <img
                  src={item.image}
                  className="w-28 h-24 lg:w-60 lg:h-32 object-cover rounded-xl lg:rounded-2xl flex-shrink-0"
                  alt={item.title}
                />
                <div className="flex-1 flex flex-col justify-between py-1 min-w-0">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-orange-500 tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="font-bold text-gray-900 leading-snug mt-1 text-sm lg:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 ">
                    <FaMapMarkerAlt className="text-orange-400 text-xl flex-shrink-0" />
                    <span className="truncate text-gray-700 font-medium text-sm">
                      {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 flex-shrink-0">
            {/* Previous */}
            <button
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage === 1}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-all
                ${
                  safePage === 1
                    ? "border-gray-100 text-gray-300 cursor-not-allowed"
                    : "border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50"
                }`}
            >
              <FiChevronLeft size={14} />
              Previous
            </button>

            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {pageNumbers.map((p, i) =>
                p === "..." ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="w-8 text-center text-xs text-gray-400"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => goToPage(p as number)}
                    className={`w-8 h-8 rounded-xl text-xs font-semibold transition-all
                      ${
                        safePage === p
                          ? "bg-orange-500 text-white shadow-sm"
                          : "text-gray-500 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                  >
                    {p}
                  </button>
                ),
              )}
            </div>

            {/* Next */}
            <button
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage === totalPages}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-medium transition-all
                ${
                  safePage === totalPages
                    ? "border-gray-100 text-gray-300 cursor-not-allowed"
                    : "border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50"
                }`}
            >
              Next
              <FiChevronRight size={14} />
            </button>
          </div>
        )}
      </motion.div>

      {/* RIGHT PANEL: MAP */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full lg:flex-1 h-[320px] lg:h-auto relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-sm"
      >
        <iframe
          key={mapSrc}
          title="Location Map"
          width="100%"
          height="100%"
          className="grayscale-[0.2] contrast-[1.1] brightness-[1.05]"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        />
      </motion.div>
    </div>
  );
}
