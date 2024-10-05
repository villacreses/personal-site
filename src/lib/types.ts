// lib/types.ts
export interface GlobalData {
  metadata: {
    site_title: string;
    site_tag: string;
  };
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  metadata: {
    published_date: string;
    content: string;
    author?: {
      slug?: string;
      title?: string;
      metadata: {
        image?: {
          imgix_url?: string;
        };
      };
    };
    teaser: string;
    categories: {
      title: string;
    }[];
  };
}

export interface PostWithCalcData extends Post {
  date: string;
  readingTime: string | number;
}

export interface Author {
  id: string;
  slug: string;
  title: string;
  metadata: {
    image?: {
      imgix_url?: string;
    };
  };
}
