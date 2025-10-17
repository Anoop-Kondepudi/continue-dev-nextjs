"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { fadeInUp } from "@/lib/animations/gsap-utils";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current && subtitleRef.current) {
      fadeInUp(headingRef.current, 0.2);
      fadeInUp(subtitleRef.current, 0.4);
    }

    // Rotate logo animation
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }

    // Animate gradient blobs
    if (blob1Ref.current) {
      gsap.to(blob1Ref.current, {
        x: 50,
        y: -30,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    if (blob2Ref.current) {
      gsap.to(blob2Ref.current, {
        x: -40,
        y: 40,
        scale: 0.9,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    if (blob3Ref.current) {
      gsap.to(blob3Ref.current, {
        x: 30,
        y: 50,
        scale: 1.05,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-24 pb-16 px-6"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={blob1Ref}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full opacity-30 blur-3xl bg-gradient-to-r from-purple-400 to-pink-400"
        />
        <div
          ref={blob2Ref}
          className="absolute top-[40%] right-[15%] w-[400px] h-[400px] rounded-full opacity-30 blur-3xl bg-gradient-to-r from-blue-400 to-cyan-400"
        />
        <div
          ref={blob3Ref}
          className="absolute bottom-[20%] left-[40%] w-[350px] h-[350px] rounded-full opacity-30 blur-3xl bg-gradient-to-r from-green-400 to-teal-400"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[750px] mx-auto text-center">
        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          style={{
            background: "linear-gradient(to bottom, #000000 0%, #666666 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Ship faster with Continuous AI
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl text-gray-600 mb-8">
          Build and run custom agents across your IDE, terminal, and CI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all hover:shadow-xl inline-flex items-center gap-2">
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
          <button className="px-6 py-3 border border-gray-300 rounded-xl font-medium hover:border-gray-400 hover:shadow-lg transition-all">
            Learn more
          </button>
        </div>
      </div>

      {/* Rotating logo/glass element */}
      <div className="relative z-10 mt-16 w-full max-w-[600px] mx-auto">
        <div ref={logoRef} className="relative w-full aspect-square max-w-[400px] mx-auto">
          {/* Glass logo SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-2/3 h-2/3 drop-shadow-2xl"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7073D9" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#56A8D1" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#39B680" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="url(#glassGrad)" opacity="0.6" />
              <circle cx="100" cy="100" r="60" fill="white" opacity="0.1" />
              <path
                d="M100 40 L140 80 L140 120 L100 160 L60 120 L60 80 Z"
                fill="url(#glassGrad)"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        {/* VS Code mockup hint */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] h-[200px] rounded-t-2xl bg-gradient-to-b from-gray-900/10 to-gray-900/5 backdrop-blur-sm border border-gray-200/50 shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-gray-600 ml-2">banner.tsx</span>
          </div>
          <div className="p-4 font-mono text-xs text-gray-700 leading-relaxed">
            <span className="text-purple-600">const</span> banner = 
            <span className="text-blue-600"> &quot;Continue rules!&quot;</span>;
          </div>
        </div>
      </div>
    </section>
  );
}
