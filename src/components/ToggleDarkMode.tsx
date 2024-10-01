import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from ".";
import { useMediaQuery } from "@/hooks";

const useDarkModeToggle = () => {
  const match = useMediaQuery("(prefers-color-scheme: dark)");
  const root = useRef<HTMLHtmlElement | null>();

  const [isDark, setIsDark] = useState(match);

  const toggle = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    root.current = document.querySelector("html");
  }, []);

  useEffect(() => {
    if (match !== isDark) {
      setIsDark(match);
    }
  }, [match]);

  useEffect(() => {
    if (root.current && isDark !== null) {
      if (root.current.hasAttribute("data-theme") || isDark !== match) {
        root.current.setAttribute("data-theme", isDark ? "dark" : "light");
      }
    }
  }, [isDark]);

  return {
    isDark,
    toggle,
  } as const;
};

export function ToggleDarkMode() {
  const { isDark, toggle } = useDarkModeToggle();

  return (
    <button
      type="button"
      className="text-2xl"
      onClick={toggle}
      title="Toggle dark mode"
      aria-label="Toggle dark mode"
    >
      <Icon iconId={isDark ? "moon" : "sun"} className="w-6" />
    </button>
  );
}
