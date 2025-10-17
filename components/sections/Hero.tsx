"use client";

import { useEffect, useRef } from "react";
import { fadeInUp } from "@/lib/animations/gsap-utils";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (headingRef.current && subtitleRef.current) {
      fadeInUp(headingRef.current, 0.2);
      fadeInUp(subtitleRef.current, 0.4);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-24 px-6">
      <div className="max-w-[750px] mx-auto text-center">
        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent"
        >
          Ship faster with Continuous AI
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          Build and run custom agents across your IDE, terminal, and CI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
            Try Continue
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-gray-400 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
