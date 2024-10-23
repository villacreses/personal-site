import { Suspense } from "react";
import { Icon } from ".";
import { useDarkModeToggle } from "@/hooks";

const fallback = <div className="w-6 h-8" />;

function ToggleDarkModeBase() {
  const { isDark, toggle } = useDarkModeToggle();

  if (isDark === null) {
    return fallback;
  }

  return (
    <button
      type="button"
      className="text-3xl sm:text-2xl"
      onClick={() => toggle()}
      title="Toggle dark mode"
      aria-label="Toggle dark mode"
    >
      <Icon iconId={isDark ? "moon" : "sun"} className="w-6" />
    </button>
  );
}

export const ToggleDarkMode = () => (
  <Suspense fallback={fallback}>
    <ToggleDarkModeBase />
  </Suspense>
);
