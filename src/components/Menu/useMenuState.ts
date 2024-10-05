import {
  useCallback,
  useRef,
  KeyboardEvent,
  useEffect,
  RefObject,
  useState,
} from "react";
import { KEY_CODES } from "@/lib/utils";

type Focusable = HTMLAnchorElement | HTMLButtonElement;

export function useMenuState(id: string) {
  const [menuOpen, setMenuOpen] = useState(false);
  const focusables = useRef<Array<Focusable>>([]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const buttonRef = useRef() as RefObject<HTMLButtonElement>;
  const navRef = useRef() as RefObject<HTMLDivElement>;

  const onItemClick = useCallback(() => setMenuOpen(false), []);

  const handleBackwardTab = (evt: KeyboardEvent) => {
    if (document.activeElement === focusables.current[0]) {
      evt.preventDefault();
      focusables.current[focusables.current.length - 1].focus();
    }
  };

  const handleForwardTab = (evt: KeyboardEvent) => {
    if (
      document.activeElement ===
      focusables.current[focusables.current.length - 1]
    ) {
      evt.preventDefault();
      focusables.current[0].focus();
    }
  };

  const onKeyDown = (evt: Event | KeyboardEvent) => {
    const e = evt as KeyboardEvent; // since typescript won't be nice
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }
      case KEY_CODES.TAB: {
        if (focusables.current.length === 1) {
          evt.preventDefault();
          break;
        }
        if (e.shiftKey) handleBackwardTab(e);
        else handleForwardTab(e);
        break;
      }
      default: {
        break;
      }
    }
  };

  const onResize = (evt: UIEvent) => {
    const target = evt.target as Window;
    if (target.innerWidth > 768) setMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    focusables.current = [buttonRef.current as Focusable].concat(
      Array.from(navRef.current?.querySelectorAll("a") || []),
    );

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return {
    id,
    menuOpen,
    toggleMenu,
    buttonRef,
    navRef,
    onItemClick,
    closeMenu,
  };
}

export type MenuContextType = ReturnType<typeof useMenuState>;
