import { IconLink } from "@/components";
import { experienceEntries, socialLinkItems } from "./content";
import { yearsSince } from "@/utils";

const yearsExp = Math.ceil(
  yearsSince(experienceEntries[experienceEntries.length - 1].startDate),
);

export default function Home() {
  return (
    <main className="grow">
      <article className="h-full flex flex-col items-center justify-center text-center">
        <header>
          <hgroup>
            <h1 className="text-4xl font-extrabold">Mario Villacreses</h1>
            <h2 className="text-lg text-neutral-500 dark:text-neutral-400">
              Software Engineer & Math Enthusiast
            </h2>
          </hgroup>
          <ul className="text-2xl flex flex-row mt-3 mb-10 justify-center">
            {socialLinkItems.map((props) => (
              <IconLink key={props.slug} className="px-1.5" {...props} iconProps={{ height: '1em' }}/>
            ))}
          </ul>
        </header>
        <p></p>
      </article>
    </main>
  );
}
