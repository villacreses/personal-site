// lib/types.ts
export interface GlobalData {
  metadata: {
    site_title: string;
    site_tag: string;
  };
}

export interface CosmicEnt<T extends {}> {
  id?: string;
  type?: string;
  title: string;
  created_at?: string;
  metadata: T;
}

export interface CosmicEntWithSlug<T extends {}> extends CosmicEnt<T> {
  slug: string;
}

export type Author = {
  image?: {
    imgix_url?: string;
  };
};

export type TPost = {
  published_date: string;
  content: string;
  author?: CosmicEntWithSlug<Author>;
  teaser: string;
  categories: {
    title: string;
  }[];
};

export interface TPostWithCalcData extends TPost {
  date: string;
  readingTime: string | number;
}