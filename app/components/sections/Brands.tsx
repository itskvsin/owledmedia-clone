"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { reveal } from "@/lib/animations/reveal";
import Marqee from "../Marquee";

const Brands = () => {
  const headingRef = useRef(null);

  useGSAP(
    () => {
      if (headingRef) {
        reveal(headingRef.current);
      }
    },
    { scope: headingRef },
  );

  return (
    <section className="h-screen">
      <div ref={headingRef} className="text-white leading-tight">
        <p className="uppercase text-center font-sans text-yellow-400 font-medium">
          Trusted by brands that
        </p>
        <p className="uppercase text-center font-sans text-[6rem] font-extrabold  font-stretch-ultra-condensed tracking-tight">
          shape{" "}
          <span className="bg-linear-to-r bg-clip-text text-transparent from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
            the world
          </span>
        </p>
      </div>
      <div>
        <Marqee />
      </div>
    </section>
  );
};

export default Brands;
