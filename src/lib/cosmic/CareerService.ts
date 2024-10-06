import {
  CosmicClient,
  CosmicEnt,
  TCompetitionAward,
  TSchoolCredential,
  TWorkEntry,
} from ".";

export class CareerService {
  static async getJobs() {
    try {
      const { objects: jobs }: { objects: CosmicEnt<TWorkEntry>[] } =
        await CosmicClient.objects
          .find({ type: "jobs" })
          .props("title, metadata")
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

      return competitionAwards.map(({ metadata }) => metadata);
    } catch (error) {
      console.log("Error fetching all school credentials:", error);
      return Promise.resolve([]);
    }
  }
}
