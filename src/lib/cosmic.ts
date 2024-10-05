// lib/cosmic.ts
import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  // @ts-ignore
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? "",
  // @ts-ignore
  readKey: process.env.COSMIC_READ_KEY ?? "",
});

export default cosmic;

