import {
  SchoolEntries,
  WorkEntries,
  HackathonEntries,
  StandardHeader,
} from "@/components";
import { CareerService, PageService } from "@/lib/cosmic";

const PAGE_SLUG = "career";

export async function generateMetadata() {
  return await PageService.getPageMetadata(PAGE_SLUG);
}

export default async function CareerHistory() {
  const [heading, workEntries, schoolCredentials, competitionAwards] =
    await Promise.all([
      PageService.getPageHeadingContent(PAGE_SLUG),
      CareerService.getJobs().then((entries) =>
        entries.map(({ metadata }) => metadata),
      ),
      CareerService.getSchoolCredentials(),
      CareerService.getCompetitionAwards(),
    ]);

  return (
    <>
      <StandardHeader
        title={heading.title!}
        description={heading.description!}
      />
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
