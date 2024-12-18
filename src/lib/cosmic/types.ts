import { IconID } from "@/components";

// lib/types.ts
export interface GlobalData {
  metadata: {
    site_title: string;
    site_tag: string;
  };
}

export interface CosmicEnt<T extends {} = {}> {
  id?: string;
  type?: string;
  slug?: string;
  title: string;
  created_at?: string;
  published_at?: string;
  modified_at?: string;
  metadata: T;
}

export interface CosmicEntWithSlug<T extends {}> extends CosmicEnt<T> {
  slug: string;
}

export type TImage = {
  url: string;
  imgix_url: string;
};

export type Author = {
  image?: TImage;
};

export type TPost = {
  banner: TImage;
  banner_caption: string;
  banner_alt_text: string;
  published_date: string;
  content: string;
  author?: CosmicEntWithSlug<Author>;
  teaser: string;
  category: {};
  tags?: {
    title: string;
  }[];
};

export interface TPostWithCalcData extends TPost {
  date: string;
  readingTime: string | number;
}

export type TWorkEntry = {
  company: string;
  job_title: string;
  location: string;
  remote: boolean;
  description: string;
  start_date: string;
  end_date?: string;
  company_logo?: string;
  tech_used?: CosmicEntWithSlug<{ category?: string }>[];
};

export type TSchoolCredential = {
  credential: string;
  school_name: string;
  graduation_date: string;
  location: string;
  description: string;
};

export type TCompetitionAward = {
  event_name: string;
  award: string;
  event_date: string;
  description: string;
  tags: CosmicEnt<{}>[];
};

export type TNowEntry = {
  icon_id: IconID;
  content: string;
};
