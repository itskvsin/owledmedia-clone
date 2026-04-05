"use client";

import { useEffect } from "react";
import { intiSmoothScroll } from "@/lib/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    intiSmoothScroll();
  }, []);

  return children;
}
