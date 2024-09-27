"use client";

import DefaultLink from "next/link";
import { ComponentProps, FC } from "react";

type TNavLink = {
  href: string;
  children: string;
};

const navLinks: TNavLink[] = [
  {
    href: "/career",
    children: "Career History",
  },
  {
    href: "/now",
    children: "Now",
  },
];

import { Icon } from "./Icon";
import { classNames } from "@/utils";

export const toggleMenu = () => {
  const body = document.querySelector("body");
  body?.toggleAttribute("data-menuopen");
};

const menuClasses = classNames([
  "hidden fixed inset-0 h-screen w-screen z-50 backdrop-blur-sm",
  "flex flex-col justify-center items-center",
]);

function TopNavbarMenu() {
  return (
    <button className="xs:hidden text-xl font-semibold tracking-wide" onClick={toggleMenu}>
      <Icon iconId="burger" height="1.3em" />
      <span className="sr-only">Open Navigation Menu</span>
      <div id="mobile-menu" className={menuClasses}>
        <nav>
          <ul className="flex flex-col gap-y-4">
            {navLinks.map((props) => (
              <li key={props.href}>
                <Link {...props} className="p-2 block" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </button>
  );
}

const Link: FC<ComponentProps<typeof DefaultLink>> = (props) => (
  <DefaultLink className="text-base font-medium" {...props} />
);

export default function TopNavbar() {
  return (
    <>
      <div className="fixed inset-x-0 px-6 sm:px-12 pt-2 pb-3 mb-[95px] h-[53px]">
        <div className="m-auto max-w-[64rem] flex flex-row justify-between">
          <nav>
            <Link href="/">Mario Villacreses</Link>
          </nav>
          <nav className="hidden xs:block">
            <ul className="flex flex-row gap-x-2">
              {navLinks.map((props) => (
                <li key={props.href}>
                  <Link {...props} className="px-2 py-1" />
                </li>
              ))}
            </ul>
          </nav>
          <TopNavbarMenu />
        </div>
      </div>
      <div className="min-h-[148px]" />
    </>
  );
}
