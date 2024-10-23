"use client";

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";

const useDarkMode = () => {
  const root = useRef<HTMLHtmlElement | null>();

  const [isDark, setIsDark] = useState<boolean | null>(null);

  const toggle = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    root.current = document.querySelector("html");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (evt: MediaQueryListEvent) => {
      setIsDark(evt.matches);
    };

    setIsDark(mediaQuery.matches); // initial check

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  useEffect(() => {
    if (isDark !== null) {
      root.current?.setAttribute("data-theme", isDark ? "dark" : "light");
    }
  }, [isDark]);

  return {
    isDark,
    toggle,
  } as const;
};

const DarkModeContext = createContext<ReturnType<typeof useDarkMode>>({
  isDark: null,
  toggle: () => {},
});

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const data = useDarkMode();
  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export const useDarkModeToggle = () => {
  const data = useContext(DarkModeContext);
  return data;
};
