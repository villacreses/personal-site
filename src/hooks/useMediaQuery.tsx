"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [queryMatch, setQueryMatch] = useState<boolean | null>(null);

  const listener = (evt: MediaQueryListEvent) => {
    setQueryMatch(evt.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", listener);
    setQueryMatch(mediaQuery.matches); // initial check

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, [query]);

  return queryMatch;
};
