"use client";
import { useCallback, useEffect, useState } from "react";

export const useScrollTracker = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = useCallback(() => {
    setScrolledToTop(window.scrollY < 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { scrolledToTop } as const;
};
