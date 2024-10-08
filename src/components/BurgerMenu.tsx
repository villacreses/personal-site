import { FC } from "react";
import { Menu } from "./Menu";
import { Icon } from "./Icon";
import { classNames } from "@/lib/utils";

type BurgerMenuProps = {
  items: {
    href: string;
    children: string;
  }[];
};

const menuClasses = classNames([
  "aria-hidden fixed inset-0 h-screen w-screen z-50 backdrop-blur",
  "flex flex-col justify-center items-center",
]);

const BurgerMenu: FC<BurgerMenuProps> = ({ items }) => (
  <Menu id="page-nav">
    <Menu.Button className="sm:hidden text-3xl">
      <Icon iconId="burger" />
    </Menu.Button>
    <Menu.Container
      className={menuClasses}
      style={{ backgroundColor: "rgba(var(--background-end-rgb), 0.7)" }}
    >
      <ul className="flex flex-col gap-y-4">
        {items.map((item) => (
          <li
            key={`item-${item.href}`}
            className="text-2xl font-semibold tracking-wide"
          >
            <Menu.Item className="p-2 block text-center" {...item} />
          </li>
        ))}
      </ul>
      <Menu.CloseButton className="absolute text-3xl right-4 top-4" />
    </Menu.Container>
  </Menu>
);

export default BurgerMenu;
