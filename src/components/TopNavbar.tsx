"use client";

import DefaultLink from "next/link";
import { ComponentProps, FC } from "react";
import { useScrollTracker } from "@/hooks";
import BurgerMenu from "./BurgerMenu";
import { ToggleDarkMode } from "./ToggleDarkMode";

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
    href: "/blog",
    children: "Blog",
  },
  {
    href: "/now",
    children: "Now",
  },
];

const menuNavLinks: TNavLink[] = [
  {
    href: "/",
    children: "Home",
  },
].concat(navLinks);

const Link: FC<ComponentProps<typeof DefaultLink>> = (props) => (
  <DefaultLink className="text-base font-medium" {...props} />
);

export default function TopNavbar() {
  const { scrolledToTop } = useScrollTracker();

  const navbarBlurOpacity = scrolledToTop ? 0 : 1;

  return (
    <>
      <div className="fixed inset-x-0 px-6 sm:px-12 py-2 mb-[95px] h-[53px]">
        <div
          className="absolute inset-x-0 top-0 h-full backdrop-blur-2xl"
          style={{ opacity: navbarBlurOpacity }}
        />
        <div className="m-auto max-w-[64rem] flex flex-row items-center relative">
          <nav className="mr-auto">
            <Link href="/" className="text-lg font-medium sm:font-normal sm:text-base">
              Mario Villacreses
            </Link>
          </nav>
          <nav>
            <ul className="flex flex-row gap-x-6 sm:gap-x-2 items-center">
              {navLinks.map((props) => (
                <li key={props.href} className="hidden sm:block">
                  <Link {...props} className="px-2 py-1" />
                </li>
              ))}
              <li>
                <ToggleDarkMode />
              </li>
              <li>
                <BurgerMenu items={menuNavLinks} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="min-h-[148px]" />
    </>
  );
}
