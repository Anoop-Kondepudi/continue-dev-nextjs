"use client";

import { useEffect, useRef } from "react";
import { fadeInUp } from "@/lib/animations/gsap-utils";

interface VideoDemoProps {
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  reverse?: boolean;
}

export default function VideoDemo({
  title,
  description,
  videoSrc,
  posterSrc,
  reverse = false,
}: VideoDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && videoRef.current) {
      fadeInUp(textRef.current, 0.2);
      fadeInUp(videoRef.current, 0.4);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12 py-16`}
    >
      {/* Text Content */}
      <div ref={textRef} className="flex-1 space-y-6">
        <h3 
          className="text-3xl md:text-4xl font-bold"
          style={{
            background: "linear-gradient(to bottom, #000000 0%, #666666 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Video */}
      <div ref={videoRef} className="flex-1 w-full">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-gradient-to-b from-white to-gray-50">
          <video
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
