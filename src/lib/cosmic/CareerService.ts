import {
  CosmicClient,
  CosmicEnt,
  TCompetitionAward,
  TSchoolCredential,
  TWorkEntry,
} from ".";

const jobProps = `{
  metadata {
    company
    job_title
    location
    remote
    description
    start_date
    end_date
    company_logo
    tech_used {
      title
      slug
      metadata {
        category
      }
    }
  }
}`;

export class CareerService {
  static async getJobs() {
    try {
      const { objects: jobs }: { objects: CosmicEnt<TWorkEntry>[] } =
        await CosmicClient.objects
          .find({ type: "jobs" })
          .props(jobProps)
          .depth(1);

      return jobs;
    } catch (error) {
      console.log("Error fetching all work entries:", error);
      return Promise.resolve([]);
    }
  }

  static async getSchoolCredentials() {
    try {
      const {
        objects: schoolCredentials,
      }: { objects: CosmicEnt<TSchoolCredential>[] } =
        await CosmicClient.objects
          .find({ type: "school-credentials" })
          .props("title, metadata")
          .depth(1);

      return schoolCredentials;
    } catch (error) {
      console.log("Error fetching all school credentials:", error);
      return Promise.resolve([]);
    }
  }

  static async getCompetitionAwards() {
    try {
      const {
        objects: competitionAwards,
      }: { objects: CosmicEnt<TCompetitionAward>[] } =
        await CosmicClient.objects
          .find({ type: "competitions" })
          .props("metadata")
          .depth(1);

      console.log("com", competitionAwards);

      return competitionAwards.map(({ metadata }) => metadata);
    } catch (error) {
      console.log("Error fetching all school credentials:", error);
      return Promise.resolve([]);
    }
  }
}
