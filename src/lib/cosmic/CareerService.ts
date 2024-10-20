import {
  CosmicClient,
  CosmicEnt,
  TCompetitionAward,
  TSchoolCredential,
  TWorkEntry,
} from ".";
import { Experience } from "../types";

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

type THomePageCredential = {
  type: Experience;
  value: string;
};

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
          .find({
            type: "school-credentials",
            sort: "-metadata.graduation_date",
          })
          .props("title, metadata")
          .depth(1);

      return schoolCredentials;
    } catch (error) {
      console.log("Error fetching all school credentials:", error);
      return Promise.resolve([]);
    }
  }

  static async getHomepageCredentials(): Promise<THomePageCredential[]> {
    try {
      const jobsPromise: Promise<THomePageCredential[]> = Promise.resolve(
        CosmicClient.objects
          .find({
            type: "jobs",
            "metadata.end_date": { $exists: false },
            sort: "-metadata.end_date",
          })
          .props("title"),
      )
        .then(({ objects }: { objects: CosmicEnt<{}>[] }) =>
          objects.map(({ title }) => ({
            value: title,
            type: Experience.JOB,
          })),
        )
        .catch(() => [
          {
            value: "Freelance Software Developer",
            type: Experience.JOB,
          },
        ]);

      const educationPromise: Promise<THomePageCredential> = Promise.resolve(
        CosmicClient.objects
          .findOne({
            type: "school-credentials",
            "metadata.graduation_date": {
              $lte: new Date().toISOString().slice(0, 10),
            },
            sort: "-metadata.graduation_date",
          })
          .props("title, metadata.graduation_date")
          .depth(1),
      ).then(
        ({
          object,
        }: {
          object: CosmicEnt<TSchoolCredential>;
        }): THomePageCredential => ({
          value: object.title,
          type: Experience.EDUCATION,
        }),
      );

      const locationPromise: Promise<THomePageCredential> = Promise.resolve(
        CosmicClient.objects
          .findOne({
            type: "location",
          })
          .props("slug,title"),
      ).then(({ object }: { object: CosmicEnt }) => ({
        value: object.title,
        type: Experience.LOCATION,
      }));

      const [jobs, education, location] = await Promise.all([
        jobsPromise,
        educationPromise,
        locationPromise,
      ]);

      return jobs.concat([education, location]);
    } catch (error) {
      console.log("Error fetching school credential:", error);
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
