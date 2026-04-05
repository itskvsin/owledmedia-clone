"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import marqueeAnimation from "@/lib/animations/marquee";
import Image from "next/image";

const logos = [
  "/images/zepto.png",
  "/images/ankur.png",
  "/images/manyawar.png",
  "/images/keventers.png",
  "/images/boat.png",
  "/images/prime.png",
  "/images/zerodha.png",
]

const Marqee = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        marqueeAnimation(containerRef.current);
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="overflow-hidden py-10 bg-black text-white"
    >
      <div className="marquee-track flex gap-20 whitespace-nowrap w-max">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center">
            <Image
              src={logo}
              width={150}
              height={80}
              alt="Picture of the author"
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marqee;
