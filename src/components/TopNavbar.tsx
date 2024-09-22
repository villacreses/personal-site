import DefaultLink from "next/link";
import { ComponentProps, FC } from "react";

type TNavLink = {
  href: string;
  children: string;
};

const navLinks: TNavLink[] = [
  {
    href: "/experience",
    children: "Experience",
  },
  {
    href: "/other",
    children: "Other",
  },
];

const Link: FC<ComponentProps<typeof DefaultLink>> = (props) => (
  <DefaultLink className="text-base font-medium" {...props} />
);

export default function TopNavbar() {
  return (
    <>
      <div className="fixed inset-x-0 px-12 pt-2 pb-3 mb-[95px] h-[53px]">
        <div className="m-auto max-w-[64rem] flex flex-row justify-between">
          <nav>
            <Link href="/">Mario Villacreses</Link>
          </nav>
          <nav>
            <ul className="flex flex-row gap-x-2">
              {navLinks.map((props) => (
                <li key={props.href} className="">
                  <Link {...props} className="px-2 py-1" />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="min-h-[148px]" />
    </>
  );
}
