import Link from "next/link";
import { Icon, IconLinkProps } from ".";

const socialLinkItems: IconLinkProps[] = [
  {
    slug: "pdf",
    label: "Download my resume",
    href: "/docs/resume.pdf",
    download: "resume_Mario-Villacreses.pdf",
  },
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
  <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
    {socialLinkItems.map(({ slug, label, ...linkProps }) => (
      <li key={slug} className="p-2 text-lg sm:text-base">
        <Link
          target="_blank"
          className="flex flex-row items-center gap-x-2"
          aria-label={label}
          title={label}
          {...linkProps}
        >
          <Icon iconId={slug} className="text-xl sm:text-2xl" />
          <span className="font-semibold tracking-tight sm:hidden">
            {label}
          </span>
        </Link>
      </li>
    ))}
  </ul>
);
