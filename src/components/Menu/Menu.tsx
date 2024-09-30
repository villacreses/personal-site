import { FC, HTMLProps, PropsWithChildren, ComponentProps } from "react";
import { MenuContextProvider, useMenuContext } from "./menuContext";
import { useMenuState } from "./useMenuState";
import Link from "next/link";
import { classNames } from "@/utils";

const omittedButtonProps = [
  "id",
  "ref",
  "aria-haspopup",
  "aria-controls",
  "aria-label",
  "type",
  "onClick",
  "data-menuOpen",
] as const;

type MenuButtonProps = Omit<
  HTMLProps<HTMLButtonElement>,
  (typeof omittedButtonProps)[number]
>;

type AnchorProps = Omit<ComponentProps<typeof Link>, "role" | "onClick">;

type MenuStandardProps = PropsWithChildren<{
  className?: HTMLProps<typeof HTMLElement>["className"];
}>;

interface MenuProps extends MenuStandardProps {
  id: string;
}

const MenuButton: FC<MenuButtonProps> = (props) => {
  const { id, buttonRef, toggleMenu, menuOpen } = useMenuContext();

  return (
    <button
      ref={buttonRef}
      id={`${id}-menu-button`}
      aria-haspopup="true"
      aria-controls={`${id}-menu-container`}
      aria-label="Menu"
      type="button"
      onClick={toggleMenu}
      data-menuopen={menuOpen}
      {...props}
    />
  );
};

const MenuContainer: FC<MenuStandardProps> = ({ className, children }) => {
  const { id, menuOpen, navRef } = useMenuContext();

  return (
    <div className={className} aria-hidden={!menuOpen}>
      <nav
        ref={navRef}
        id={`${id}-menu-container`}
        aria-labelledby={`${id}-menu-button`}
        tabIndex={menuOpen ? 1 : -1}
        role="menu"
      >
        {children}
      </nav>
    </div>
  );
};

const MenuItem: FC<AnchorProps> = ({ className, ...props }) => {
  const { id, onItemClick } = useMenuContext();

  return (
    <Link
      role="menuitem"
      className={classNames([`${id}-menu-item`, className])}
      onClick={onItemClick}
      {...props}
    />
  );
};

export function Menu({ id, children }: MenuProps) {
  const menuState = useMenuState(id);

  return (
    <MenuContextProvider value={menuState}>{children}</MenuContextProvider>
  );
}

Menu.Container = MenuContainer;
Menu.Button = MenuButton;
Menu.Item = MenuItem;
