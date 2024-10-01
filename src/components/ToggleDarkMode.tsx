import { useCallback, useState } from "react";
import { Icon } from ".";

const useDarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleLightDark = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return {
    iconId: isDark ? "moon" : "sun",
    toggleLightDark,
  } as const;
};

export function ToggleDarkMode() {
  const { iconId, toggleLightDark } = useDarkModeToggle();

  return (
    <button type="button" className="text-2xl" onClick={toggleLightDark}>
      <Icon iconId={iconId} className="w-6" />
    </button>
  );
}
