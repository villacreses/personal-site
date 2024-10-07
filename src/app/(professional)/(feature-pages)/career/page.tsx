import {
  SchoolEntries,
  WorkEntries,
  Markdown,
  HackathonEntries,
  StandardHeader,
} from "@/components";
import { CareerService } from "@/lib/cosmic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mario Villacreses' Career History",
  description:
    "This page highlights my work history, along with any significant  accomplishments that shaped me as I've navigated the tech industry.",
};

const headerContent = `
This page highlights my work history, along with any significant 
accomplishments that shaped me as I've navigated the tech industry. Be sure
to also check out [my latest resume](/docs/resume.pdf).
`;

export default async function CareerHistory() {
  const [workEntries, schoolCredentials, competitionAwards] = await Promise.all(
    [
      CareerService.getJobs().then((entries) =>
        entries.map(({ metadata }) => metadata),
      ),
      CareerService.getSchoolCredentials(),
      CareerService.getCompetitionAwards(),
    ],
  );

  return (
    <>
      <StandardHeader title="Mario's Career History" className="mb-20">
        <Markdown>{headerContent}</Markdown>
      </StandardHeader>
      <section className="page-section">
        <h2 className="section-header">Education</h2>
        <SchoolEntries entries={schoolCredentials} />
      </section>
      <section className="page-section">
        <h2 className="section-header">Professional Experience</h2>
        <ol className="flex flex-col gap-12">
          <WorkEntries entries={workEntries} />
        </ol>
      </section>
      <section>
        <h2 className="section-header">Hackathons</h2>
        <HackathonEntries entries={competitionAwards} />
      </section>
    </>
  );
}
