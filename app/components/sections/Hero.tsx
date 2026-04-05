"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { heroAnimation } from "@/lib/hero";

const Hero = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      if (container) {
        heroAnimation(container.current);
      }
    },
    { scope: container },
  );
  return (
    <section
      ref={container}
      className="min-h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="text-center">
        <h1 className="hero-title text-6xl font-bold">
          Creative Growth Studio
        </h1>

        <p className="hero-sub mt-6 text-xl text-gray-400">
          We build brands that scale
        </p>
      </div>
    </section>
  );
};

export default Hero;
