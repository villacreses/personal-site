import { SchoolEntries, WorkEntries, HackathonEntries } from "@/components";
import { CareerService } from "@/lib/cosmic";

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
