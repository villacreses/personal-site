import Link from "next/link";
import { Icon, IconLinkProps } from ".";

const socialLinkItems: IconLinkProps[] = [
  {
    slug: "envelope",
    label: "Send me an email",
    href: "mailto:MarioVillacreses@outlook.com",
  },
  {
    slug: "github",
    label: "Follow me on GitHub",
    href: "https://github.com/villacreses",
  },
  {
    slug: "linkedin",
    label: "Add me on LinkedIn",
    href: "https://www.linkedin.com/in/villacreses",
  },
];

export const SocialLinks = () => (
  <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6">
    {socialLinkItems.map(({ slug, href, label }) => (
      <li key={slug} className="p-2 text-lg sm:text-sm">
        <Link href={href} className="flex flex-row items-center gap-x-1.5">
          <Icon iconId={slug} height="1.2em" />
          <span className="font-semibold tracking-tight">{label}</span>
        </Link>
      </li>
    ))}
  </ul>
);
