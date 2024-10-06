import {
  SchoolEntries,
  WorkEntries,
  Markdown,
  HackathonEntries,
  StandardHeader,
} from "@/components";
import {
  educationEntries,
  workEntries,
  headerContent,
  hackathonEntries,
} from "./content";
import { CareerService } from "@/lib/cosmic";

export default async function CareerHistory() {
  const jobs = await CareerService.getWorkEntries();
  console.log("jobs", jobs);
  return (
    <>
      <StandardHeader title="Mario's Career History" className="mb-20">
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
      <section className="page-section">
        <h2 className="section-header">Education</h2>
        <SchoolEntries entries={educationEntries} />
      </section>
      <section className="page-section">
        <h2 className="section-header">Professional Experience</h2>
        <ol className="flex flex-col gap-12">
          <WorkEntries entries={workEntries} />
        </ol>
      </section>
      <section>
        <h2 className="section-header">Hackathons</h2>
        <HackathonEntries entries={hackathonEntries} />
      </section>
    </>
  );
}
